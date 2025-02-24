import React from "react";
import { useState } from "react";
import { formSchema } from "./FormSchema/ConfessionDataSchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { db, ref, set } from "./Firebase/firebaseConfig";
import { monthList } from "./config/month";
import { v4 as uuidv4 } from "uuid";

const LeftSidebar = () => {
  const createdAt = new Date().getTime();
  let date = new Date(createdAt);
  // console.log(date);
  // console.log(date.getMonth());
  // console.log(monthList[date.getMonth()]);

  return (
    <div className="w-full">
      <Formik
        initialValues={{ name: "", text: "" }}
        validationSchema={formSchema}
        onSubmit={({ name, text }) => {
          try {
            const confessionRef = ref(db, "confessions/" + uuidv4());
            set(confessionRef, { createdAt, name, text });
            console.log("Data Saved Successfully");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form className="flex flex-col border-2 rounded-lg p-6 space-y-6 ">
          <div className="flex flex-col">
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div className="flex flex-col">
            <label>Text</label>
            <Field type="textbox" name="text" />
            <ErrorMessage name="text" />
          </div>

          <button type="submit" className="border-2 rounded text-white">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LeftSidebar;
