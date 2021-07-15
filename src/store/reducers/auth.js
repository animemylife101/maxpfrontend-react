import { LOGIN_WITH_GOOGLE, LOG_IN, LOG_OUT } from "../types/auth";

const initializationState = {
    userId: localStorage.getItem('userId'),
}

const authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case LOG_IN:
            const userId = action.data.id;
            return {
                ...state,
                userId, userId
            }
        case LOG_OUT:
            return {
                ...state,
                userId: null
            }
        case LOGIN_WITH_GOOGLE: {
            return {
                ...state,
                userId: 1
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default authReducer;