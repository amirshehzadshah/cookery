'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

  const [isActive, setIsActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .matches(
          /@(gmail\.com|yahoo\.com|outlook\.com)$/,
          'Only Gmail, Yahoo, or Outlook emails are allowed'
        )
        .required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      setIsActive(true);
      setTimeout(() => {
        resetForm();
        setIsActive(false);
      }, 5000);
    },
  });

  return (
    <div className="my-12 w-full">

      <section
        className="w-full flex items-center justify-center bg-cover bg-center text-white py-32 max-sm:px-4"
        style={{ backgroundImage: `url(/assets/bg-img-contact.jpg)` }}
      >
        <div className='bg-black/5 backdrop-blur-sm max-w-4xl w-full rounded-lg p-5 shadow-lg border border-white/20 mx-auto flex flex-col items-center'>
          <h1 className="text-3xl font-bold text-center">LET&rsquo;S GET TALK</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-8 py-8 px-16 rounded-lg bg-white shadow-lg flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Get In Touch</h2>
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            ) : null}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className={`relative flex self-center px-4 py-2 bg-gray-800 text-white text-xl font-semibold rounded-lg shadow-lg transition-all duration-1000 overflow-hidden ${isActive ? 'bg-green-500' : ''}`}
          >
            <p
              className={`transition-all duration-1000 ${isActive ? 'mr-32' : ''}`}
            >
              {isActive ? 'Thanks' : 'Submit'}
            </p>
            <div
              className={`absolute top-0 right-5 size- bg-transparent rounded-full shadow-md flex items-center justify-center transition-all duration-1000 ${isActive ? 'opacity-100 right-0' : 'opacity-0'}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-10 h-10"
              >
                <path
                  fill="transparent"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  className={`stroke-white stroke-3 transition-all duration-1000 ${isActive ? 'stroke-dashoffset-0' : 'stroke-dashoffset-[34px] stroke-dasharray-[34px]'}`}
                />
              </svg>
            </div>
          </button>
        </form>
      </section>

      <section className="max-w-6xl mx-auto py-8 px-4 flex justify-center items-center gap-8 max-lg:flex-col">
        <div className="text-lg text-center max-w-3xl flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <p>+92 320 2665379</p>
        </div>
        <div className="text-lg text-center max-w-3xl flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <p>info@thecookerylahore.com</p>
        </div>
        <div className="text-lg text-center max-w-3xl flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <p>Islamabad Capital Territory, Pakistan.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-8 px-4 flex flex-col items-center justify-center">
        <h2 className='font-bold text-3xl text-center m-4'>HOW TO FIND US</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10154.558780720548!2d73.0097369199396!3d33.69574255045463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1730699437887!5m2!1sen!2s" width="600" height="450" className="border-0 rounded-xl w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

    </div>
  )
}

export default Contact