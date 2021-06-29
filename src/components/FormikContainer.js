import * as Yup from 'yup';
import {Formik, Form} from 'formik'

function FormikContainer () {
  const initialValues = {};
  const validationSchema = Yup.object({
    // 
  })
  const onSubmit = values => console.log('Form Data :', values)
  return(
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {
        (formik) => (
          <Form>
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormikContainer;