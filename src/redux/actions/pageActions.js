/*************************************
*         [PAGE]  ACTIONS            *
**************************************/
import { types } from "../types/types";


/*
    MIDDLESWARE
*/



/*
    ACTIONS
*/
export const pgSetActiveAction = ( page )=>{
    return{
        type: types.pgSetActivePage,
        payload: page
    }
}