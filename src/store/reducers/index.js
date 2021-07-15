import { combineReducers } from "redux";
import authReducer from "./auth";
import newsReducer from "./news";
import profileReducer from './profile';
import preloaderReducer from './preloader';

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    news: newsReducer,
    preloader: preloaderReducer
});

export default reducers;