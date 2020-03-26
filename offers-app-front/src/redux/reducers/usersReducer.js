import { GET_USER_ASYNC } from "../actions/usersActions"

export default function usersReducer(state = [], action){
    
    switch (action.type){
        case GET_USER_ASYNC :
            return action.payload
        default :
            return state
    }
}