import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

function LoginForm() {
  const onSubmit = (values) => console.log(values);

  const initialValues = {
    email: '',
    pword: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required!'),
    pword: Yup.string().required('Password is required!')
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(formik) => (
        <React.Fragment>
          <h3>Login Form</h3>
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="input"
              type="password"
              name="pword"
              label="Password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
}

export default LoginForm;
