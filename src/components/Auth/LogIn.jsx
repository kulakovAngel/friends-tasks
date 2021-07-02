import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Field, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';

import { BaseForm } from '../BaseForm';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';
import { SInput } from '../../Styled/forms/SInput';
import { SLabel } from '../../Styled/forms/SLabel';
// import { SPrompt } from '../../Styled/forms/SPrompt';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';
import styled, { css } from 'styled-components';
import { useEffect } from 'react';

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

const flexCenter = ({vertical = true, horizontal = true}) => css`
    display: flex;
    justify-content: ${horizontal && 'center'};
    align-items: ${vertical && 'center'};
`;

export const SPrompt = styled.span`
    ${flexCenter({horizontal: false})};
    height: 16px;
    font-size: 14px;
	margin: 5px 10px 10px;
`;

export function LogIn() {
    const [resStatus, setResStatus] = useState('');
    const [auth, setAuth] = useState('');

    const handleSubmit = (authData, {setStatus}) => {
        setStatus(undefined);
        console.log(authData)
        axios
            .post('https://friends-todos.herokuapp.com/auth/login', {
                login: authData.username,
                password: authData.password,
            })
            .then(res => {
                setAuth(res.data);
                axios.defaults.headers.common['Authorization'] = res.headers.authorization;
                console.log(res);
            })
            .catch(error => {
                setResStatus(error.response.data.message);
                console.dir(error);
            });
    }


    // useEffect(() => {
    //     axios
    //         .get('https://friends-todos.herokuapp.com/users')
    //         .then(({data}) => {
    //             console.log(data);
    //         })
    // }, [auth]);

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
                    {resStatus}
                    <SLabel htmlFor="uname">Username</SLabel>
                    <SInput
                        as={Field}
                        id="uname"
                        type={'text'}
                        name={'username'}
                        onChange={handleChange}
                        value={values.username}
                    />
                    <SPrompt>
                        {errors.username && touched.username ? errors.username : (status && status.username)}
                    </SPrompt>
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
                    <SPrompt>
                        {errors.password && touched.password ? errors.password : (status && status.password)}
                    </SPrompt>
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