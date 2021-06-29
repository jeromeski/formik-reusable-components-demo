import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {
          // destructure field from the render props
          ({ form, field }) => {
            // allows to set a field's value to a formik state
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DateView
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
