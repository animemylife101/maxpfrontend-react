import API from '../api/api';
import defineError from '../items-helper/define-error';
import { GET_PROFILE } from '../types/profile';
import { setError, setPreloader } from './preloader';

export const getProfile = (userId) => async (dispatch) => {
    dispatch(setPreloader(false));
    if (navigator.onLine) {
        try {
            let response = await API.profile.getProfile(userId);
            let result = response.data.data.social.filter(a => a['label'] === 'web');
            let array = [result[0], ...response.data.data.social.filter(a => a['label'] !== 'web')];
            if (result.length) {
                response.data.data.social = array;
                dispatch(getProfileSucces(response.data.data));
                dispatch(setError('profile_ok'));
                dispatch(setPreloader(true));
            } else {
                dispatch(getProfileSucces(response.data.data));
                dispatch(setError(defineError(response.data.message)));
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
    
};

const getProfileSucces = (data) => ({
    type: GET_PROFILE,
    data
});
