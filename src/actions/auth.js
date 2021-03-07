import API from "../api/api"
import { LOG_IN, LOG_OUT } from "../types/auth";
import { setError, setPreloader } from './preloader';
import defineError from '../items-helper/define-error';

export const login = (data) => async (dispatch) => {
    dispatch(setError(''));
    dispatch(setPreloader(true));
    try {
        let response = await API.login(data);
        if (response.data.status === 'ok') {
            dispatch(loginSucces(response.data.data));
            return {
                status: 'OK'
            }
        }
        if (response.data.status === 'err') {
            let error = dispatch(setError(defineError(response.data.message)));
            dispatch(setPreloader(false));
            return {
                status: 'NOT_OK',
                error
            }
        }
    } catch (err) {
        let error = dispatch(setError(defineError('not_connected_to_network')));
        dispatch(setPreloader(false));
        return {
            status: 'NOT_OK',
            error
        }
    }
};

export const logout = () => (dispatch) => {
    dispatch(unfollowSucces());
}

const loginSucces = (data) => ({
    type: LOG_IN,
    data
});

const unfollowSucces = () => ({
    type: LOG_OUT
})