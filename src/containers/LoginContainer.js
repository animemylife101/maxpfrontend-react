import { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { login } from "../actions/auth";
import Login from "../page/Login/Login"
import google from "../responsibility/google";
import PropTypes from 'prop-types';

const LoginContainer = (props) => {
    let [state, setState] = useState({
        data: {
            email: '',
            password: ''
        },
        isFetching: props.isFetching,
        error: props.error,
        inProgress: false
    });

    const changeState = (currentState) => {
        let template = (arg) => {
            let result = {};
            [arg].map((a, index) => result.index = a);
            return result.index;
        };
        setState(prev => ({ ...prev, ...template(currentState) }));
    }

    const onHandleChange = (target) => {
        setState(prev => ({ ...prev, data: { ...prev.data, [target.name]: target.value } }));
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        setState(prev => ({ ...prev, error: '', inProgress: true }));
        const Response = await props.login(state.data, props.history, 'LOGIN_DEFAULT');
        if (Response.status === 'OK') props.history.push('/profile');
        else {
            setState(prev => ({
                ...prev,
                data: { email: '', password: '' },
                error: Response.error.error,
                inProgress: false
            }))
        };
    }

    const googleRequest = () => { setState(prev => ({ ...prev, ...google.responseGoogleLoginRequest() })) };
    const googleFailure = () => { setState(prev => ({ ...prev, ...google.responseGoogleLoginFailure() })) };
    const googleSucess = () => { google.responseGoogleLoginSuccess(props.login, props.history) };

    return <Login state={state} setState={setState} changeState={changeState}
        onHandleChange={onHandleChange} onSubmitForm={onSubmitForm}
        googleRequest={googleRequest} googleFailure={googleFailure}
        googleSucess={googleSucess} {...props} />
}

LoginContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string
};

const mapStateToProps = (state) => ({
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
});

export default compose(
    withRouter, connect(mapStateToProps, { login })
)(LoginContainer);