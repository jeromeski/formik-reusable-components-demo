import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function RadioButtons(props) {
  const { name, label, options } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          // console.log('field :', field);
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <div>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  // field.value --> value of this particular field
                  checked={field.value === option.value}
                />
                <label className="mt-3" htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtons;
