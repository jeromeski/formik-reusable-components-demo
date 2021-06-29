import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

function RegistrationForm() {
  const onSubmit = (values) => console.log(values);

  const initialValues = {
    email: '',
    pword: '',
    pword2: '',
    modeOfContact: '',
    phone: ''
  };

  const mocOptions = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' }
  ];

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required!'),
    pword: Yup.string().required('Password is required!'),
    pword2: Yup.string().test(
      'passwords-match',
      'Passwords must match',
      function (value) {
        return this.parent.pword === value;
      }
    ),
    modeOfContact: Yup.string().required('Choose one'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: Yup.string().required('Required')
    })
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
            <FormikControl
              control="input"
              type="password"
              name="pword2"
              label="Confirm Password"
            />

            <FormikControl
              control="radio"
              type="radio"
              name="modeOfContact"
              label="Mode of contact"
              options={mocOptions}
            />
            <FormikControl
              control="input"
              type="text"
              name="phone"
              label="Telephone"
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

export default RegistrationForm;
