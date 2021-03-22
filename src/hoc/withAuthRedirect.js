import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const withAuthRedirect = (Component) => {

    const WrapperComponent = (props) => {
        if (!props.userId) {
            return <Redirect to = '/login' />
        }

        return <Component />
    }

    WrapperComponent.propTypes = {
        userId: PropTypes.string
    }

    const mapStateToProps = (state) => ({
        userId: state.auth.userId
    })

    const withAuthRedirectComponent = connect(mapStateToProps, null)(WrapperComponent);
    return withAuthRedirectComponent;
}

export default withAuthRedirect;