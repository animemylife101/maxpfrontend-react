import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => {
    return <div data-testid='error_page'> 
        {error ? <span>{error}</span> : ''}
    </div>
}

Error.propTypes = {
    error: PropTypes.string
}

export default Error;