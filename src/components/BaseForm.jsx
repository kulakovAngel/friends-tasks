import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

export function BaseForm({renderForm, formikData}) {
    const handleSubmit = (...args) => {
        console.log(args[0]);
        return formikData.onSubmit.call(null, ...args);
    }
    const afterSubmitPhrase = 'Loading';
    return (
        <Formik
            {...formikData}
            onSubmit={handleSubmit}
        >
            {
                ({
                    values,
                    handleSubmit,
                    errors,
                    status,
                    handleChange, 
                    isSubmitting,
                    dirty,
                    handleBlur,
                    handleReset,
                    isValid,
                    isValidating,
                    resetForm,
                    setErrors,
                    setFieldError,
                    setFieldTouched,
                    submitForm,
                    submitCount,
                    setStatus,
                    setSubmitting,
                    setTouched,
                    setValues,
                    touched,
                    validateForm,
                    ValidateField,
                    component,
                    render,
                    children,
                    enableReinitialize,
                    isInitialValid,
                    initialErrors,
                    initialStatus,
                    initialTouched,
                    initialValues,
                    onReset,
                    onSubmit,
                    validate,
                    validateOnBlur,
                    validateOnChange,
                    validateOnMount,
                    validationSchema,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {
                            renderForm({
                                values,
                                handleSubmit,
                                errors,
                                status,
                                handleChange, 
                                isSubmitting,
                                dirty,
                                handleBlur,
                                handleReset,
                                isValid,
                                isValidating,
                                resetForm,
                                setErrors,
                                setFieldError,
                                setFieldTouched,
                                submitForm,
                                submitCount,
                                setStatus,
                                setSubmitting,
                                setTouched,
                                setValues,
                                touched,
                                validateForm,
                                ValidateField,
                                component,
                                render,
                                children,
                                enableReinitialize,
                                isInitialValid,
                                initialErrors,
                                initialStatus,
                                initialTouched,
                                initialValues,
                                onReset,
                                onSubmit,
                                validate,
                                validateOnBlur,
                                validateOnChange,
                                validateOnMount,
                                validationSchema,
                                afterSubmitPhrase,
                            })
                        }
                    </Form>
                )
            }
        </Formik>
    );
}

BaseForm.propTypes = {
    renderForm: PropTypes.func.isRequired,
    formikData: PropTypes.object.isRequired,
};