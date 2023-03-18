import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required Field"),
    email: Yup.string().email("Invalid email").required("Required Field"),
    subject: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required Field"),
    message: Yup.string().min(2, "Too Short!").max(250, "Too Long!").required("Required Field"),
  });

  const handleSubmit = async (values) => {
    const { name, email, subject, message } = values;
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };
    try {
      setLoading(true);
      await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_ID);
      Swal.fire({
        title: "Good Job",
        text: "Your message has been received",
        icon: "success",
        confirmButtonColor: "#F97316",
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, try again later!",
        icon: "error",
        confirmButtonColor: "#F97316",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2 py-20 contact md:px-5" id="contact">
      <div className="mb-20 text-center" data-aos="fade-down">
        <h4 className="mb-5 text-xl subtitle">We Want to Hear From You</h4>
        <h1 className="section-title">CONTACT US</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2" data-aos="fade">
        <div className="w-full mb-10">
          <iframe className="h-full w-full border-0 min-h-[400px]" title="map" src={process.env.REACT_APP_CONTACT_MAP} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-full mb-10">
          <h2 className="text-2xl font-bold">SEND US A MESSAGE</h2>
          <p className="my-5 font-medium text-normal">Send us a message and we'll get back to you promptly.</p>
          <Formik initialValues={initialValues} validationSchema={ContactSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form>
                <div className="relative py-4 form-group">
                  <label className="absolute left-3 top-1">Enter Your Name:</label>
                  <Field name="name" className={`input-${errors.name && touched.name ? "error" : "primary"}`} />
                  <ErrorMessage component="span" name="name" className="error-msg" />
                </div>
                <div className="relative py-4 form-group">
                  <label className="absolute left-3 top-1">Enter Your Email:</label>
                  <Field name="email" className={`input-${errors.email && touched.email ? "error" : "primary"}`} />
                  <ErrorMessage component="span" name="email" className="error-msg" />
                </div>
                <div className="relative py-4 form-group">
                  <label className="absolute left-3 top-1">Enter Your Subject:</label>
                  <Field name="subject" className={`input-${errors.subject && touched.subject ? "error" : "primary"}`} />
                  <ErrorMessage component="span" name="subject" className="error-msg" />
                </div>
                <div className="relative py-4 form-group">
                  <label className="absolute left-3 top-1">Enter Your Message:</label>
                  <Field as="textarea" name="message" className={`input-${errors.message && touched.message ? "error" : "primary"}`} rows="5" />
                  <ErrorMessage component="span" name="message" className="error-msg" />
                </div>
                <div className="form-group">
                  <button disabled={loading} type="submit" className="btn-primary-lg disabled:bg-opacity-50">
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
