import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Field } from 'formik';
import * as Yup from 'yup';

import { BaseForm } from '../BaseForm';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';
import { SInput } from '../../Styled/forms/SInput';
import { SLabel } from '../../Styled/forms/SLabel';
import { SPrompt2 } from '../../Styled/forms/SPrompt';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';
import { loginSuccess } from './redux/actionsCreators';

const logInSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Username is too short')
        .max(50, 'Username is too long')
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .min(4)
        // .matches(
        //     /(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$)/,
        //     'Must contain minimum 8 characters, at least one letter and one number:',
        // ),
});

const LogIn = ({loginSuccess, users}) => {

    const handleSubmit = (authData) => {
        loginSuccess('hello');

        console.log(users);
    }

    return (
        <BaseForm
            formikData={{
                onSubmit: handleSubmit,
                initialValues: {
                    username: '',
                    password: '',
                },
                validationSchema: logInSchema,
            }}
            renderForm={({
                values,
                errors,
                touched,
                handleChange,
                afterSubmitPhrase,
                isSubmitting,
                status,
            }) => (
                <SWrapCol>
                    {/* {resStatus} */}
                    <SLabel htmlFor="uname">Username</SLabel>
                    <SInput
                        as={Field}
                        id="uname"
                        type={'text'}
                        name={'username'}
                        onChange={handleChange}
                        value={values.username}
                    />
                    <SPrompt2>
                        {errors.username && touched.username ? errors.username : (status && status.username)}
                    </SPrompt2>
                    {/* {errors.username && touched.username ? (
                        <SPrompt>{errors.username}</SPrompt>
                    ) : (
                        status && <SPrompt>{status.username}</SPrompt>
                    )} */}
                    <SLabel htmlFor="pass">Password</SLabel>
                    <SInput
                        as={Field}
                        id="pass"
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                        value={values.password}
                    />
                    <SPrompt2>
                        {errors.password && touched.password ? errors.password : (status && status.password)}
                    </SPrompt2>
                    <SSubmitButton type={'submit'}>{isSubmitting ? 'Log In' : afterSubmitPhrase}</SSubmitButton>
                </SWrapCol>
            )} 
        />
    )
}

LogIn.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
};

// mapStateToProps берет состояние users из store и передает его как props в компонент LogIn
const mapStateToProps = (state) => ({
    users: state.users,
});

// mapDispatchToProps передает action или actionCreators как props в компонент Login
// если mapDispatchToProps не определен, то в компонент LogIn передастся стандартный метод dispatch()
const mapDispatchToProps = {
    loginSuccess: loginSuccess,
};

const ConnectedToStoreLogIn = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export { ConnectedToStoreLogIn as LogIn };