/*************************************
*         [AUTH]  ACTIONS            *
**************************************/
import { types } from "../types/types";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetchJWT";
import Swal from 'sweetalert2'
const baseUrl = process.env.REACT_APP_API_URL;

/*
    MIDDLESWARE
*/
export const startLogin = (email,password) =>{
    return async(dispatch)=>{
        
        const resp = await fetchWithoutToken('auth', {email,password}, 'POST')
        const body = await resp.json()
        
        if(body.ok){
            //grabar token en localStorage
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            //Dispatch login
            dispatch(authLoginAction({
                uid: body.usuario.uid,
                name: body.usuario.name,
                userName: body.usuario.userName,
                email: body.usuario.email,
                role: body.usuario.role,
                img: `${baseUrl}/picture/usuarios/${!!body.usuario.img ? body.usuario.img : 'no-user-image' }?token=${body.token}`
            }))

        }else{
            Swal.fire('Error', body.msg,'error')
        }

    }

}

export const startCheckingAction = ()=>{
    return async(dispatch) =>{

        const resp = await fetchWithToken('auth/renew')
        const body = await resp.json()

        if(body.ok){
            //grabar token en localStorage
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            //Dispatch login
            dispatch(authLoginAction({
                uid: body.usuario.uid,
                name: body.usuario.name,
                userName: body.usuario.userName,
                email: body.usuario.email,
                role: body.usuario.role,
                img: `${baseUrl}/picture/usuarios/${!!body.usuario.img ? body.usuario.img : 'no-user-image' }?token=${body.token}`
            }))

        }else{
            dispatch(authCheckingAction())
        }

    }
}


export const startLogout = () =>{
    return async(dispatch)=>{
        localStorage.clear()

        dispatch(authLogoutAction())

    }
}


/*
    ACTIONS
*/
const authLoginAction = ( user )=>{
    return{
        type: types.authLogin,
        payload: user
    }
}

const authCheckingAction = ()=>{
    return{
        type: types.authCheckingFinish,
    }
}



export const authLogoutAction = ()=>{
    return{
        type: types.authLogout
    }
}


