import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import ProfileLanguages from './ProfileLanguages/ProfileLanguages';
import ProfileSocials from './ProfileSocials/ProfileSocials';

const Profile = (props) => {
    let [state, setState] = useState({
        isFetching: false,
        error: null
    })

    useEffect(() => {
        props.getProfile(props.userId).then((response) => {
            setState(prev => ({
                ...prev,
                isFetching: response.isFetching,
                error: response.error,
            }))
        });
    }, []);

    return <div>
        {
            state.isFetching === true
                ? <div>
                    {
                        <div>
                            {
                                state.error
                                    ? <h1>{state.error || 'Ошибка'}</h1>
                                    : <div>
                                        <h1>Profile</h1>
                                        <div>
                                            <p>Мой город: {props.profile.city ? props.profile.city : <i>Город не указан</i>}</p>
                                            <ProfileLanguages {...props} />
                                            <ProfileSocials {...props} />
                                        </div>
                                    </div>
                            }
                        </div>
                    }
                </div>
                : <h1>Wait...</h1>
        }
    </div>
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    profile: state.profile.profile
});


export default withAuthRedirect(connect(mapStateToProps, { getProfile })(Profile));