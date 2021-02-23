import API from '../api/api';
import defineError from '../items-helper/define-error';
import { GET_PROFILE } from '../types/profile';

export const getProfile = (userId) => async (dispatch) => {
    try {
        let response = await API.profile.getProfile(userId);
        let result = response.data.data.social.filter(a => a['label'] === 'web');
        let array = [result[0], ...response.data.data.social.filter(a => a['label'] !== 'web')];
        if (result.length) {
            response.data.data.social = array;
            dispatch(getProfileSucces(response.data.data));
            return {
                isFetching: true,
                error: false
            }
        } else {
            dispatch(getProfileSucces(response.data.data));
            return {
                isFetching: true,
                error: defineError(response.data.message)
            }
        }
    } catch (err) {
        return {
            isFetching: true,
            error: defineError('not_connected_to_network')
        }
    }
};

const getProfileSucces = (data) => ({
    type: GET_PROFILE,
    data
});
