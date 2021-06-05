import React from "react";
import CheckBox from "./elements/CheckBox";
import InputField from "./elements/InputField";
import DateInput from "./elements/datepicker.module.scss/DatePicker";
interface Props {
  control?: string;
  name: string;
  label: string;
  placeholder?: string;
  options?: {};
  selected?: Date | number | string;
  action?: any;
}

function FormikControl(props: Props) {
  const { control, name, label, ...rest } = props;

  switch (control) {
    case "input":
      return <InputField name={name} label={label} {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DateInput name={name} label={label} {...rest} />;
    default:
      return <InputField name={name} label={label} {...rest} />;
  }
}

export default FormikControl;
