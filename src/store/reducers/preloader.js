import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import { SET_ERROR, SET_PRELOADER } from "../types/preloader";

const initialization = {
    isFetching: false,
    error: null
}

const preloaderReducer = (state = initialization, action) => {
    switch (action.type) {
        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default preloaderReducer;