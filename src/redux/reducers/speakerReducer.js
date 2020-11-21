/*************************************
*         [SPEAKER]  REDUCER         *
**************************************/

import { types } from "../types/types";


const initialState = {
    checking: true,
    speakers:[
        // {
        //     id: "5fa487169925484114e003d0",
        //     name: "Armando Casas",
        //     title: "Constructor",
        //     country: "Cuba",
        //     topic: "Mi casita y yo",
        //     whatsApp: '+50769226743',
        //     image:'',
        //     usuario:{
        //         uid: '1fa4861699254841146003d0',
        //         name:"Alex Hernandez",
        //         userName:"Alex8902",
        //         email: "arnansdfsdfdezo7@gmail.com",
        //         image:'',
        //         role: "USER_ROLE"  
        //     }
        // }
    ],
    activeSpeaker: null
}


export const speakerReducer = (state= initialState, action) =>{

    switch (action.type) {
        case types.spListCheckingFinish:
            return {
                ...state,
                checking: false,
                speakers: [
                    ...action.payload
                ]
            }
        case types.spSetActive:
            return {
                ...state,
                activeSpeaker: action.payload
            }
        case types.spRegister:
            return {
                ...state,
                speakers: [
                    ...state.speakers, 
                    action.payload
                ]
            }
        case types.spDelete:
            return {
                ...state,
                speakers: state.speakers.filter(
                    speaker=>(speaker.id !==action.payload)
                )
            }
        default:
            return state
    }
}