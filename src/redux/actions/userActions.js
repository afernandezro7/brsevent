/*************************************
*         [USER]  ACTIONS            *
**************************************/

import { fetchWithToken, fetchWithTokenFormData } from "../../helpers/fetchJWT";
import { types } from "../types/types";
import Swal from 'sweetalert2'
const baseUrl = process.env.REACT_APP_API_URL;

/*
    MIDDLESWARE
*/
export const startCheckingUserList = () =>{
    return async(dispatch)=>{
        
        const resp = await fetchWithToken('users/userlist')
        const body = await resp.json()
        
        if(body.ok){
            // Format img property
            const token = localStorage.getItem('token')
            const usersToReducer = body.usuarios.map( user => ({
                ...user,
                img:`${baseUrl}/picture/usuarios/${!!user.img ? user.img : 'no-user-image' }?token=${token}`
            }))

            dispatch(userGetListAction(usersToReducer))
        }else{
            dispatch(userGetListAction([]))
            console.log(body.msg);           
        }
    }
}

export const startAddNewUser = (user) =>{
    return async(dispatch)=>{

        const resp = await fetchWithTokenFormData('users/register', user, 'POST')
        const body = await resp.json()

        if(body.ok){
            const token = localStorage.getItem('token')

            const userToReducer ={
                ...body.usuario,
                img:`${baseUrl}/picture/usuarios/${!!body.usuario.img ? body.usuario.img : 'no-user-image' }?token=${token}`    
            }

            //Dispatch userSetActive
            dispatch(userSetActiveAction( userToReducer ))

            //Dispatch userAddNew
            dispatch(userAddNewAction( userToReducer ))
            
            Swal.fire('Ok', 'Registrado Correctamente','success')
        }else{
            Swal.fire('Error', body.msg,'error')
        }
    }
}

export const startDeleteUser = (uid) =>{
    return async(dispatch)=>{
        const endpoint = `users/${uid}`
        const resp = await fetchWithToken( endpoint, {}, 'DELETE')
        const body = await resp.json()

       
        if(body.ok){

            //Dispatch userAddNew
            dispatch(userDeleteAction( uid ))
            Swal.fire('Ok', body.msg,'success')
        }else{
            Swal.fire('Error', body.msg,'error')
        }
    }
}




/*
    ACTIONS
*/
const userGetListAction = ( users )=>{
    return{
        type: types.userListCheckingFinish,
        payload: users
    }
}
const userSetActiveAction = ( user )=>{
    return{
        type: types.userSetActive,
        payload: user
    }
}
export const userUnSetActiveAction = ( )=>{
    return{
        type: types.userUnSetActive
    }
}

const userAddNewAction = ( user )=>{
    return{
        type: types.userRegister,
        payload: user
    }
}
const userDeleteAction = ( uid )=>{
    return{
        type: types.userDelete,
        payload: uid
    }
}