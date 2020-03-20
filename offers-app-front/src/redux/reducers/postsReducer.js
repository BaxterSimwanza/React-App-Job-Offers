import { GET_ALL_POSTS } from "../actions/postsActions"

export default function usersReducer(state, action){
    switch(action.type){
        case GET_ALL_POSTS:
            return {
                ...state,
                posts : [...state, action.payload ]
            }       
        default : 
            return this.state
    }
}