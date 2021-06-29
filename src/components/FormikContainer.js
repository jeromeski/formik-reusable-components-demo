import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';

function FormikContainer() {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required!'),
    description: Yup.string()
      .required('Required!')
      .min(10, 'Must be at least 5 to 100 characters')
      .max(50, 'Must be at least 5 to 100 characters'),
    selectOption: Yup.string().required('Choose one!'),
    radioOption: Yup.string().required('Choose one!')
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

          <FormikControl
            control="select"
            name="selectOption"
            label="Select an option"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            name="radioOption"
            label="Select a choice"
            options={radioOptions}
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
