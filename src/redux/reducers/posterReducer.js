/*************************************
*         [POSTER]  REDUCER          *
**************************************/

import { types } from "../types/types";

const initialState = {
    checking:true,
    posters:[
        // {
        //     id:'1u31u34k324k23455225',
        //     title:'Primer titulo',
        //     alt: 'texto alternativo',
        //     info: 'Descripcion corta',
        //     img:'https://i.pinimg.com/originals/79/bf/2b/79bf2b98d996dde1f13569759b18edc5.jpg'
        // }          
    ],
    activePoster:null
}

export const posterReducer = (state= initialState, action) =>{

    switch (action.type) {
        case types.posterListCheckingFinish:
            return {
                ...state,
                checking: false,
                posters:[
                    ...action.payload
                ]
            }
        case types.posterSetActive:
            return {
                ...state,
                activePoster: state.posters.find(poster => poster.id === action.payload)
            }
        case types.posterUnSetActive:
            return {
                ...state,
                activePoster: null
            }
        case types.posterRemove:
            return {
                ...state,
                posters:[
                    ...state.posters.filter( poster => poster.id !== action.payload)
                ]
            }
        case types.posterAddNew:
            return {
                ...state,
                posters:[
                    ...state.posters,
                    action.payload
                ]
            }
        default:
            return state;
    }
}