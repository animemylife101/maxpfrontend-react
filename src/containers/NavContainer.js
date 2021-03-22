import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { login, logout } from '../actions/auth';
import Nav from '../components/Nav/Nav';
import PropTypes from 'prop-types';

const NavContainer = (props) => {
    return <Nav {...props} />
}

NavContainer.propTypes = {
    userId: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId
});

export default compose(
    withRouter, connect(mapStateToProps, { logout, login }))
(NavContainer);
