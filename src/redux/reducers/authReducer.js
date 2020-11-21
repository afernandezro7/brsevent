/*************************************
*         [AUTH]  REDUCER            *
**************************************/

import { types } from "../types/types";

const initialState = {
    checking: true
    // uid: "5fa8097214d34c3e889c932a",
    // name: "Ana Sánchez",
    // userName: "AnaASG",
    // mail: "anelg9@gmail.com",
    // role: "USER_ROLE"
}

export const authReducer = (state= initialState, action) =>{

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authLogout:
            return {
                checking: false
            }
        default:
            return state;
    }
}