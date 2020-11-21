/*************************************
*         [PAGE]  REDUCER            *
**************************************/

import { types } from "../types/types";

const initialState = {
    activePg: 'info',
}

export const pageReducer = (state= initialState, action) =>{

    switch (action.type) {
        case types.pgSetActivePage:
            return {
                ...state,
                activePg: action.payload
            }
        default:
            return state;
    }
}