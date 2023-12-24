"use client";
import React from "react";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";

function Form() {
  return (
    <section>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-[125px]">
        <div className="lg:w-[350px]">
          <h3 className="heading-m">Contact Me</h3>
        </div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              resetForm();

              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <form className="lg:flex-1" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[#33323d] text-[13px] font-bold leading-[30px] opacity-80"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full h-12 bg-[#33323d] bg-opacity-10 text-[13px] font-normal leading-[30px] text-[#33323d] text-opacity-60 px-4 outline-none ${
                    formik.touched.name && !formik.errors.name
                      ? "border-green-500 border "
                      : ""
                  } ${
                    formik.touched.name && formik.errors.name
                      ? "border-[#F43030] border"
                      : ""
                  } `}
                  placeholder="Jane Appleseed"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <label
                  className="text-[#33323d] text-[13px] font-bold leading-[30px] opacity-80"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className={`w-full h-12 bg-[#33323d] bg-opacity-10 text-[13px] font-normal leading-[30px] text-[#33323d] text-opacity-60 px-4 outline-none ${
                    formik.touched.email && !formik.errors.email
                      ? "border-green-500 border "
                      : ""
                  } ${
                    formik.touched.email && formik.errors.email
                      ? "border-[#F43030] border"
                      : ""
                  } `}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <label
                  className="text-[#33323d] text-[13px] font-bold leading-[30px] opacity-80"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can I help?"
                  className={`w-full h-24 bg-[#33323d] bg-opacity-10 text-[13px] font-normal leading-[30px] text-[#33323d] text-opacity-60  px-4 outline-none ${
                    formik.touched.message && !formik.errors.message
                      ? "border-green-500 border "
                      : ""
                  } ${
                    formik.touched.message && formik.errors.message
                      ? "border-[#F43030] border"
                      : ""
                  }`}
                  {...formik.getFieldProps("message")}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div>{formik.errors.message}</div>
                ) : null}
              </div>

              <button
                className="w-[200px] bg-[#203A4C] h-12 inline-flex items-center justify-center text-white text-xs uppercase tracking-[2px] leading-normal font-normal  mt-6 mb-20 "
                type="submit"
              >
                Send Message
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Form;
