import { GET_NEWS } from "../types/news";

const initializationState = {
    news: []
}

const newsReducer = (state = initializationState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.data
            }    
        default:
            return {
                ...state
            }
    }
}

export default newsReducer;