import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import IsLoading from '../../tools/isLoading';
import ProfileLanguages from './ProfileLanguages/ProfileLanguages';
import ProfileSocials from './ProfileSocials/ProfileSocials';

const Profile = (props) => {

    useLayoutEffect(() => {
        props.getProfile(props.userId);
    }, []);

    const data = <div>
        <p>Мой город: {props.profile.city ? props.profile.city : <i>Город не указан</i>}</p>
        <ProfileLanguages {...props} />
        <ProfileSocials {...props} />
    </div>

    return <div>
        <IsLoading isFetching={props.isFetching}>
            {
                props.error === 'profile_ok' ? data : <h1>{props.error}</h1>
            }
        </IsLoading>
    </div>
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    profile: state.profile.profile,
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
});


export default withAuthRedirect(connect(mapStateToProps, { getProfile })(Profile));