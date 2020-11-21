/*************************************
*         [CHANNEL]  REDUCER         *
**************************************/

import { types } from "../types/types";

const initialState = {
    checking:true,
    channels:[
        // {
        //     id:'sd88dsddsfdssdfssdsd',
        //     title: 'Sala No.2',
        //     streamSrc: 'https://www.youtube.com/watch?v=YbKhyMbKSrQ',
        //     description:'Una descripcion corta de la conferencia',
        //     speakers: [
        //         {
        //             id:'8sd8asdasdsdd8fssdd',
        //             name: "Platzi",
        //             title: "Constructor",
        //             country: "Cuba",
        //             topic: "Mi casita y yo"
        //         },
        //         {
        //             id:'8sd8asdasdd8fssdd',
        //             name: "Yokoy Kenji",
        //             title: "Constructor",
        //             country: "Cuba",
        //             topic: "Mi casita y yo"
        //         }
        //     ]
        // }
      
    ],
    activeCH:null
}

export const channelReducer = (state= initialState, action) =>{

    switch (action.type) {
        case types.chListCheckingFinish:
            return {
                ...state,
                checking: false,
                channels:[
                    ...action.payload
                ]
            }
        case types.chSetActive:
            return {
                ...state,
                activeCH: action.payload
            }
        case types.chUnSetActive:
            return {
                ...state,
                activeCH: null
            }
        case types.chRemove:
            return {
                ...state,
                channels:[
                    ...state.channels.filter( ch => ch.id !== action.payload)
                ]
            }
        case types.chAddNew:
            return {
                ...state,
                channels:[
                    ...state.channels,
                    action.payload
                ]
            }
        default:
            return state;
    }
}