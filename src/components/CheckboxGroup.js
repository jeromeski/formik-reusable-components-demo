import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function CheckboxGroup(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control ">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log('field :', field);
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <div className="d-flex">
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  // field.value --> value of this particular field
                  checked={field.value.includes(option.value)}
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

export default CheckboxGroup;
