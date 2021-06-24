import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { BaseForm } from '../BaseForm';
import { SFormItemCol } from '../../Styled/forms/SFormItemCol';
import { SLabel } from '../../Styled/forms/SLabel';
import { SInput } from '../../Styled/forms/SInput';
import { SPrompt } from '../../Styled/forms/SPrompt';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';

const signUpSchema = Yup.object().shape({
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
    confirmPasword: Yup.string()
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'), 
});

export function SignUp() {
    const handleSubmit = (authData, {setErrors}) => {
        console.log(authData);
    }
    return (
        <BaseForm
            formikData={{
                onSubmit: handleSubmit,
                initialValues: {
                    username: '',
                    password: '',
                    confirmPasword: '',
                },
                validationSchema: signUpSchema,
            }}
            renderForm={({
                values,
                errors,
                touched,
                handleChange,
                afterSubmitPhrase,
                isSubmitting,
            }) => (
                <SWrapCol>
                    <SFormItemCol>
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
                        ) : null}
                    </SFormItemCol>
                    <SFormItemCol>
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
                        ) : null}
                    </SFormItemCol>
                    <SFormItemCol>
                    <SLabel htmlFor="cpass">Confirm password</SLabel>
                        <SInput
                            id="cpass"
                            type={'password'}
                            name={'confirmPasword'}
                            onChange={handleChange}
                            value={values.confirmPasword}
                        />
                        {errors.confirmPasword && touched.confirmPasword ? (
                        <SPrompt>{errors.confirmPasword}</SPrompt>
                        ) : null}
                    </SFormItemCol>
                    <SSubmitButton type={'submit'}>{isSubmitting ? 'Sign Up' : afterSubmitPhrase}</SSubmitButton>
                </SWrapCol>
            )}
        />
    );
}

SignUp.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
    confirmPasword: PropTypes.string,
};