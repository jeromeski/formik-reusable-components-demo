import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required!')
  });
  const onSubmit = (values) => console.log('Form Data :', values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
