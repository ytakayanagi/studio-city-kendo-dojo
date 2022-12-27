import React from 'react'
import { useForm } from '@formspree/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = (): JSX.Element => {
  const [state, handleSubmit] = useForm('xrgrkqnp')

  if (state.succeeded) {
    return (
      <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Your message has been sent!
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We will get to you as soon as possible. If you do not receive
                any response, please contact us again and make sure we have the
                correct email address or phone number.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
        <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-y-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <span id="message-max" className="text-sm text-gray-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                aria-describedby="message-max"
                required
              />
            </div>
          </div>
          <ReCAPTCHA sitekey="6LcGdBgbAAAAALYn25VCDfZpIEF5wmXhtqvpIkuz" />
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
