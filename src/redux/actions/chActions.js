/*************************************
*         [CHANNEL]  ACTIONS            *
**************************************/
import { fetchWithToken } from "../../helpers/fetchJWT";
import { types } from "../types/types";
import Swal from 'sweetalert2'

/*
    MIDDLESWARE
*/
export const startCheckingChannelList = () =>{
    return async(dispatch)=>{
        
        const resp = await fetchWithToken('channels')
        const body = await resp.json()

        if(body.ok){
            
            const channelsList = body.channels.map( ch => (
                {
                    ...ch,
                    speakers: ch.speakers.map( speaker=> {
                        const{ _id, ...rest } = speaker                    
                        return {
                            id:_id,
                            ...rest
                        }
                    } )
                }
     
            ))
    
            dispatch(chGetListAction(channelsList))


        }else{
            dispatch(chGetListAction([]))
        }
        
    }
}


export const startAddNewChannel = ( channel ) =>{
    return async(dispatch)=>{

        const speakers = channel.speakers.map(speaker => {
            const { usuario, ...speakerWithoutUserInfo} = speaker
            return speakerWithoutUserInfo   
        })

        const channelToDB = {
            ...channel,
            speakers:channel.speakers.map(speaker => speaker.id)
        }

        
        const resp = await fetchWithToken('channels/create', channelToDB , 'POST')
        const body = await resp.json()


        if(body.ok){
            const channelToReducer ={
                ...body.channel,
                speakers
            }
            dispatch(chAddNewAction(channelToReducer))
            Swal.fire('OK', body.msg,'success')

        }else{
            Swal.fire('Error', body.msg,'error')
        }


    }
}


export const startDeleteChannel = ( channelID ) =>{
    return async(dispatch)=>{

        const resp = await fetchWithToken(`channels/${channelID}`, {} , 'DELETE')
        const body = await resp.json()

        if(body.ok){

            dispatch(chDeleteAction(channelID))
            Swal.fire('OK', body.msg,'success')
        }else{
            Swal.fire('Error', body.msg,'error')
        }

    }

}



/*
    ACTIONS
*/
const chGetListAction = ( channels )=>{
    return{
        type: types.chListCheckingFinish,
        payload: channels
    }
}
export const chSetActiveAction = ( channel )=>{
    return{
        type: types.chSetActive,
        payload: channel
    }
}
export const chUnSetActiveAction = ( )=>{
    return{
        type: types.chUnSetActive,
    }
}
const chAddNewAction = ( channel )=>{
    return{
        type: types.chAddNew,
        payload: channel
    }
}
const chDeleteAction = ( chID )=>{
    return{
        type: types.chRemove,
        payload: chID
    }
}
