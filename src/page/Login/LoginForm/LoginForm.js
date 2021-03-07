import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import style from '../Login.module.css';

const LoginForm = (props) => {
    let [state, setState] = useState({
        data: {
            email: '',
            password: ''
        },
        isFetching: props.isFetching,
        error: props.error
    })

    useLayoutEffect(() => {
        setState(prev => ({
            ...prev,
            error: '',
            isFetching: false
        }));
        // componentwillunmount alternative hook
        return () => {
            setState(prev => ({
                ...prev,
                error: '',
                isFetching: false
            }))
        }
    }, [])

    const onHandleChange = ({ target }) => {
        setState(prev => ({
            ...prev,
            data: {
                ...prev.data,
                [target.name]: target.value
            }
        }))
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();
        let login = props.login(state.data, props.history);
        Promise.all([login]).then(Response => {
            console.log(Response)
            if (Response[0]?.status === 'OK') props.history.push('/news');
            else {
                setState(prev => ({
                    ...prev,
                    data: {
                        ...prev,
                        email: '',
                        password: ''
                    },
                    error: Response[0].error.error
                }));
            }
        })
    }



    const { email, password } = state.data;
    return <form className={style.Form} onSubmit={onSubmitForm} >
        <input type='text' placeholder={'Email'} name={'email'} value={email} onChange={onHandleChange} />
        <input type='text' placeholder={'Password'} name={'password'} value={password} onChange={onHandleChange} />
        {state.error ? <span>{state.error}</span> : ''}
        <button disabled={state.isFetching ? true : false}>Login</button>
    </form>
}

const mapStateToProps = (state) => ({
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
})

export default connect(mapStateToProps, { login })(LoginForm);