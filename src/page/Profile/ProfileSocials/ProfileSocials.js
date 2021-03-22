import React from 'react';
import defineIcon from '../../../items-helper/define-icon';
import PropTypes from 'prop-types';

const ProfileSocials = ({ profile }) => {
    return <div>
        Мои социальные сети:
        {
            profile.social.length > 1
                ? profile.social.map((a, i) => {
                    return <div key={i}>
                        <img src={defineIcon(a.label)} />
                        <a href={a.link} target='_blank' rel="noreferrer noopener" >{a.label}</a>
                        <br />
                    </div>
                })
                : <i> Не указано</i>
        }
    </div>
}

ProfileSocials.propTypes = {
    profile: PropTypes.exact({
        city: PropTypes.string,
        languages: PropTypes.array,
        social: PropTypes.array,
        userId: PropTypes.number
    }),
}

export default ProfileSocials;