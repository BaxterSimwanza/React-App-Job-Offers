import {GET_ALL_POSTS_ASYNC} from "../actions/postsActions"

export default function postsReducer(state = [], action){
    switch(action.type){
        case GET_ALL_POSTS_ASYNC :
            return action.payload
        default : 
            return state
    }
}