import React from "react";
import { useState } from "react";
import { formSchema } from "./FormSchema/ConfessionDataSchema";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { db, ref, set } from "./Firebase/firebaseConfig";
import { monthList } from "./config/month";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";

const LeftSidebar = () => {
  const createdAt = new Date().getTime();

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
            const uID = uuidv4();
            const confessionRef = ref(db, "confessions/" + uID);
            set(confessionRef, { uID, createdAt, name, text });
            toast.success("Data Saved Successfully");
          } catch (error) {
            toast.error("Data inserstion Failed");
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

          <button
            type="submit"
            className="border-2 rounded-xl px-4 py-2 text-white hover:text-black transition-transform duration-300 hover:scale-110"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <ToastContainer delay={2500} />
    </div>
  );
};

export default LeftSidebar;
