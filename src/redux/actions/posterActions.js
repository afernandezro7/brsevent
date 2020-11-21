/*************************************
*         [POSTER]  ACTIONS            *
**************************************/
import { fetchWithToken, fetchWithTokenFormData } from "../../helpers/fetchJWT";
import { types } from "../types/types";
import Swal from 'sweetalert2'
const baseUrl = process.env.REACT_APP_API_URL;

/*
    MIDDLESWARE
*/
export const startCheckingPostersList = () =>{
    return async(dispatch)=>{
        
        const resp = await fetchWithToken('poster/list')
        const body = await resp.json()

        if(body.ok){
            const token = localStorage.getItem('token')
            const postersToReducer = body.posters.map( poster => ({
                ...poster,
                img:`${baseUrl}/picture/galeria/${!!poster.img ? poster.img : 'no-image' }?token=${token}`
            }))
            

            dispatch(posterGetListAction(postersToReducer))
        }else{
            dispatch(posterGetListAction([]))
            console.log(body.msg);           
        }
    }
}


export const startAddNewPoster = ( poster ) =>{
    return async(dispatch)=>{
        
        const resp = await fetchWithTokenFormData('poster/create/galeria', poster , 'POST')
        const body = await resp.json()

        if(body.ok){
            const token = localStorage.getItem('token')

            const posterToReducer ={
                ...body.poster,
                img:`${baseUrl}/picture/galeria/${!!body.poster.img ? body.poster.img : 'no-image' }?token=${token}`    
            }

            dispatch(posterAddNewAction(posterToReducer))
            Swal.fire('OK', 'Poster creado correctamente','success')
        }else{
            Swal.fire('Error', body.msg,'error')
        }


    }
}


export const startDeletePoster = (id) =>{
    return async(dispatch)=>{
        const posterEndpoint = `poster/${id}`
        const resp = await fetchWithToken( posterEndpoint, {}, 'DELETE')
        const body = await resp.json()

        if(body.ok){

            dispatch(posterDeleteAction( id ))
            //Dispatch userAddNew
            Swal.fire('OK', body.msg,'success')
        }else{
            Swal.fire('Error', body.msg,'error')
        }
    }
}

/*
    ACTIONS
*/
const posterGetListAction = ( posters )=>{
    return{
        type: types.posterListCheckingFinish,
        payload: posters
    }
}
export const posterSetActiveAction = ( posterID )=>{
    return{
        type: types.posterSetActive,
        payload: posterID
    }
}
export const posterUnSetActiveAction = ( )=>{
    return{
        type: types.posterUnSetActive,
    }
}
const posterAddNewAction = ( poster )=>{
    return{
        type: types.posterAddNew,
        payload: poster
    }
}
const posterDeleteAction = ( posterID )=>{
    return{
        type: types.posterRemove,
        payload: posterID
    }
}

