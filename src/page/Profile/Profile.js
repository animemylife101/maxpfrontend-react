import React, { useLayoutEffect } from 'react';
import IsLoading from '../../tools/isLoading';
import PropTypes from 'prop-types';

const Profile = ({ getProfile, userId, isFetching, error, data }) => {
    useLayoutEffect(() => {
        getProfile(userId);
    }, []);
    return <div data-testid='profile-page' >
        <IsLoading isFetching={isFetching}>
            {error === 'profile_ok' ? data : <h1>{error}</h1>}
        </IsLoading>
    </div>
}

Profile.propTypes = {
    getProfile: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    data: PropTypes.object
}

export default Profile;