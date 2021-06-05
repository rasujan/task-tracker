import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikController";
import DatePicker from "react-datepicker";

interface valuesType {
  text: string;
  date: string;
  reminder: boolean;
}

const AddTask = ({ onAdd }: any) => {
  // const reminder = [{ key: "Set Reminder", value: true }];
  const initialValues: valuesType = {
    text: "",
    date: "",
    reminder: false,
  };
  const validationSchema = Yup.object({
    text: Yup.string().required("Please write the task"),
    date: Yup.string().required("Please enter date"),
  });

  const onSubmit = (values: valuesType) => onAdd(values);

  return (
    <div className="flex flex-col w-full mb-2 shadow-lg bg-gray-50 border border-gray-800 rounded-lg ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(initialValues) => onSubmit(initialValues)}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                label="Task"
                name="text"
                placeholder="Appointment"
              />
              <DatePicker name="date" onChange={() => {}} />
              <div className="flex m-2 p-2 space-x-2 items-center">
                <Field id="reminder" type="checkbox" name="reminder" />
                <label htmlFor="reminder">Set Reminder</label>
              </div>
              <div className="my-3 mx-3">
                <button
                  type="submit"
                  className=" py-2 px-2 block justify-center  w-full   border rounded-lg text-sm  text-white font-medium text-whitem bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-blue-600"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddTask;
