import { GET_PROFILE } from "../types/profile"

const initializationState = {
    profile: {}
}

const profileReducer = (state = initializationState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.data
            } 
        default:
            return {
                ...state
            }
    }
}

export default profileReducer;