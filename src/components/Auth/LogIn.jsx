import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { BaseForm } from '../BaseForm';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';
import { SInput } from '../../Styled/forms/SInput';
import { SLabel } from '../../Styled/forms/SLabel';
import { SPrompt } from '../../Styled/forms/SPrompt';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';

const logInSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Username is too short')
        .max(50, 'Username is too long')
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$)/,
            'Must contain minimum 8 characters, at least one letter and one number:',
        ),
});

export function LogIn() {
    const handleSubmit = (authData, {setStatus}) => {
        setStatus(undefined);
        setTimeout(() => {
            setStatus({
                username: 'This username does not exist',
                password: 'This password is incorrect',
            })
        }, 500)
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
                    <SLabel htmlFor="uname">Username</SLabel>
                    <SInput 
                        id="uname"
                        type={'text'}
                        name={'username'}
                        onChange={handleChange}
                        value={values.username}
                    />
                    {errors.username && touched.username ? (
                        <SPrompt>{errors.username}</SPrompt>
                    ) : (
                        status && <SPrompt>{status.username}</SPrompt>
                    )}
                    <SLabel htmlFor="pass">Password</SLabel>
                    <SInput
                        id="pass"
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && touched.password ? (
                        <SPrompt>{errors.password}</SPrompt>
                    ) : (
                        status && <SPrompt>{status.password}</SPrompt>
                    )}
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