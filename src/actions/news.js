import API from "../api/api"
import defineError from "../items-helper/define-error";
import { GET_NEWS } from '../types/news';

export const getNews = () => async (dispatch) => {
    try {
        let response = await API.news.getNews();
        if (response.data.status === 'ok') {
            dispatch(getNewsSuccess(response.data.data));
        }

        return {
            isFetching: true,
            error: false
        }
    } catch (err) {
        return {
            isFetching: true,
            error: defineError('not_connected_to_network')
        }
    }
}
const getNewsSuccess = (data) => ({
    type: GET_NEWS,
    data
})