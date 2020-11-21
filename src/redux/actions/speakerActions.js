/*************************************
*         [SPEAKER]  ACTIONS         *
**************************************/

import { fetchWithToken } from "../../helpers/fetchJWT";
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { startAddNewUser, startDeleteUser, userUnSetActiveAction } from "./userActions";


/*
    MIDDLESWARE
*/
export const startCheckingSpeakersList = () =>{
    return async(dispatch)=>{
        
        const resp = await fetchWithToken('speaker')
        const body = await resp.json()

        
        if(body.ok){
            const speakers = body.speakers.map( speaker => ({
                ...speaker,
                usuario:{
                    uid: speaker.usuario._id,
                    name: speaker.usuario.name,
                    userName: speaker.usuario.name,
                    email: speaker.usuario.email,
                    role: speaker.usuario.role,
                    img: speaker.usuario.img || ''
                }
            }))

            dispatch(spGetListAction(speakers))
        }else{
            dispatch(spGetListAction([]))
            console.log(body.msg)
        }
    }
}

export const startAddNewSpeaker = (speaker) =>{
    return async(dispatch, getState)=>{

        
        //Dispatch userAddNewUser
        await dispatch(startAddNewUser( speaker.usuario ))
        const {activeUser} = getState().user

        if(activeUser){
            const speakerToDB = {
                ...speaker,
                usuario:{
                    uid: activeUser.uid
                }
            }
    
            //Create Speaker
            const resp = await fetchWithToken('speaker/create', speakerToDB, 'POST')
            const body = await resp.json()
    
            if(body.ok){
    
                //Dispatch userAddNewSpeaker
                dispatch(spAddNewAction( {
                    ...body.speaker,
                    usuario:{
                        ...activeUser   
                    }
                } ))
    
            }else{
                Swal.fire('Error', body.msg,'error')
            }
        }

        dispatch(userUnSetActiveAction())
        
    }
}

export const startDeleteSpeaker = (id, uid) =>{
    return async(dispatch)=>{
        const speakerEndpoint = `speaker/${id}`
        const resp = await fetchWithToken( speakerEndpoint, {}, 'DELETE')
        const body = await resp.json()

        if(body.ok){

            dispatch(spDeleteAction( id ))
            //Dispatch userAddNew
           
            dispatch(startDeleteUser( uid ))
            

        }else{
            Swal.fire('Error', body.msg,'error')
        }
    }
}

/*
    ACTIONS
*/

const spGetListAction = ( speakers )=>{
    return{
        type: types.spListCheckingFinish,
        payload: speakers
    }
}
export const spSetActiveAction = ( speaker )=>{
    return{
        type: types.spSetActive,
        payload: speaker
    }
}

const spAddNewAction = ( speaker )=>{
    return{
        type: types.spRegister,
        payload: speaker
    }
}
const spDeleteAction = ( id )=>{
    return{
        type: types.spDelete,
        payload: id
    }
}