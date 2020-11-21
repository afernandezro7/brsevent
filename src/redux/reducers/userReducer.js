/*************************************
*         [USER]  REDUCER            *
**************************************/

import { types } from "../types/types";

const initialState = {
    checking: true,
    users:[
        // {
        //     uid: '12h4y5k56h34jk',
        //     name:"Alex Hernandez",
        //     userName:"Alex8902",
        //     email: "arnansdfsdfdezo7@gmail.com",
        //     password:"123456",
        //     role: "ADMIN_ROLE"  
        // }
    ],
    activeUser: null
}

export const userReducer = (state= initialState, action) =>{

    switch (action.type) {
        case types.userListCheckingFinish:
            return {
                ...state,
                checking: false,
                users: [
                    ...action.payload
                ]
            }
        case types.userSetActive:
            return {
                ...state,
                activeUser: action.payload
            }
        case types.userUnSetActive:
            return {
                ...state,
                activeUser: null
            }
        case types.userRegister:
            return {
                ...state,
                users: [
                    ...state.users, 
                    action.payload
                ]
            }
        case types.userDelete:
            return {
                ...state,
                users: state.users.filter(
                    user=>(user.uid !==action.payload)
                )
            }
        default:
            return state
    }
}

