import PropTypes from 'prop-types';
import {Formik} from 'formik';

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
                }) => (
                    <form onSubmit={handleSubmit}>
                        {
                            renderForm({
                                values,
                                handleSubmit,
                                errors,
                                status,
                                handleChange,
                                afterSubmitPhrase,
                                isSubmitting,
                            })
                        }
                    </form>
                )
            }
        </Formik>
    );
}

BaseForm.propTypes = {
    renderForm: PropTypes.func.isRequired,
    formikData: PropTypes.object.isRequired,
};