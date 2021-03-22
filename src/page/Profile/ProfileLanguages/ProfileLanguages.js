import React from 'react';
import PropTypes from 'prop-types';

const ProfileLanguages = ({ profile }) => {
    return <div>
        Языки, которые я знаю:
        {
            profile.languages.length
                ? profile.languages.map((a, i) => {
                    return <p key={i}>{a}</p>
                })
                : <i>Не указано</i>
        }
    </div>
}

ProfileLanguages.propTypes = {
    profile: PropTypes.exact({
        city: PropTypes.string,
        languages: PropTypes.array,
        social: PropTypes.array,
        userId: PropTypes.number
    }),
}

export default ProfileLanguages;