import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function CheckBox(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <div className="my-3 mx-3">
        <label htmlFor={name} className="block mx-2 my-2">
          {label}
        </label>
        <Field
          id={name}
          name={name}
          className="relative block w-full px-2 py-2 border rounded-lg  border-gray-800 placeholder-gray-600 text-grey-600 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
          {...rest}
        >
          {({ field }: any) => {
            return options.map((option: { key: string; value: string }) => {
              return (
                <React.Fragment key={option.key}>
                  <span className="mx-2">
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                    />
                    <label htmlFor={option.value}> {option.key} </label>
                  </span>
                </React.Fragment>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default CheckBox;
