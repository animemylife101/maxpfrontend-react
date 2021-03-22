import React from 'react';
import PropTypes from 'prop-types';

const IsLoading = ({isFetching, children}) => {
    return isFetching ? children : <h1>Wait...</h1>;
}

IsLoading.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
}

export default IsLoading;