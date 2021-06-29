import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required!'),
    description: Yup.string()
      .required('Required')
      .min(10, 'Must be at least 5 to 100 characters')
      .max(50, 'Must be at least 5 to 100 characters')
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

          <FormikControl
            control="textarea"
            name="description"
            label="Description"
          />
          <button type="submit">Submit</button>
          <br />
          <br />
          <div>
            {JSON.stringify('The quick brown fox jumps over the lazy dog')}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
