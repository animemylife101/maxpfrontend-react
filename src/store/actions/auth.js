import API from "../api/api"
import { LOG_IN, LOG_OUT, LOGIN_WITH_GOOGLE } from "../types/auth";
import { setError, setPreloader } from './preloader';
import defineError from '../items-helper/define-error';

export const login = (data, meta, type) => async (dispatch) => {
    dispatch(setError(''));
    dispatch(setPreloader(true));
    switch (type) {
        case 'LOGIN_DEFAULT':
            try {
                let response = await API.login(data);
                if (response.data.status === 'ok') {
                    dispatch(loginSucces(response.data.data));
                    localStorage.setItem(`userId`, response.data.data.id)
                    dispatch(setPreloader(false));
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
        case 'LOGIN_WITH_GOOGLE': {
            dispatch(loginWithGoogle());
        }
        default:
            break
    }
};

export const loginWithGoogle = () => ({ type: LOGIN_WITH_GOOGLE });
export const logout = () => (dispatch) => { 
    localStorage.removeItem(`userId`);
    dispatch(unfollowSucces()); 
}

const loginSucces = (data) => ({ type: LOG_IN, data });
const unfollowSucces = () => ({ type: LOG_OUT });
