import PropTypes from 'prop-types';

import {BaseForm} from '../BaseForm';
import { SLabel } from '../../Styled/forms/SLabel';
import { SInput } from '../../Styled/forms/SInput';
import { SSubmitButton } from '../../Styled/forms/SSubmitButton';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';

export function SignUp() {
    // const [authData, setAuthData] = useState({
    //     username: '',
    //     password: '',
    //     confirmPasword: '',
    // });

    // const handleChangeInput = (evt) => {
    //     // evt.target.value;
    //     setAuthData({
    //         ...authData,
    //         [evt.target.name]: evt.target.value.toUpperCase(),
    //     });
    // }

    function valdator(setErrors) {

    }
    const handleSubmit = (authData, {setErrors}) => {
        if (authData.password !== authData.confirmPasword) {
            setErrors({
                confirmPasword: 'pswds are not same!'
            });
        }
        console.log(authData);
    }
    return (
        <BaseForm
            formikData={{
                onSubmit: handleSubmit,
                initialValues: {
                    username: 'd',
                    password: '2',
                    confirmPasword: '5',
                }
            }}
            renderForm={({
                values,
                errors,
                status,
                handleChange,
                afterSubmitPhrase,
                isSubmitting,
            }) => (
                <SWrapCol>
                            <SLabel htmlFor="uname">Username</SLabel>
                            <SInput id="uname" type={'text'} name={'username'} onChange={handleChange} value={values.username} />
                            <SLabel htmlFor="pass">Password</SLabel>
                            <SInput id="pass" type={'password'} name={'password'} onChange={handleChange} value={values.password} />
                            <SLabel htmlFor="cpass">Confirm password</SLabel>
                            <SInput id="cpass" type={'password'} name={'confirmPasword'} onChange={handleChange} value={values.confirmPasword} />
                            {errors.confirmPasword}
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