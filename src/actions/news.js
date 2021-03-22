import API from "../api/api"
import defineError from "../items-helper/define-error";
import { GET_NEWS } from '../types/news';
import { setError, setPreloader } from "./preloader";

export const getNews = () => async (dispatch) => {
    dispatch(setPreloader(false));
    if (navigator.onLine) {
        try {
            let response = await API.news.getNews();
            if (response.data.status === 'ok') {
                dispatch(getNewsSuccess(response.data.data));
                dispatch(setError('news_ok'));
                dispatch(setPreloader(true));
            }
            else {
                dispatch(setError(response.data.message));
                dispatch(setPreloader(true));
            }
        } catch (err) {
            dispatch(setError(defineError('server_failed')));
            dispatch(setPreloader(true));
        }
    } else {
        dispatch(setError(defineError('not_connected_to_network')));
        dispatch(setPreloader(true));
    }
}
const getNewsSuccess = (data) => ({
    type: GET_NEWS,
    data
})