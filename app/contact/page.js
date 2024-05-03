"use client";
import React from "react";
// 80011F
const Contact = () => {
  return (
    <div className='bg-white w-full p-0 h-auto pb-10 text-[#80011F]'>
      <h1 className='text-center sm:text-5xl text-3xl sm:mb-12 mb-2'>
        Contact Us
      </h1>
      <div className='container flex sm:flex-row flex-col-reverse w-full h-max'>
        <div className='sm:w-[40%] pt-9 sm:text-left text-center Livvic-Medium bg-[#FFF5E1] min-h-[50vh] sm:rounded-r-[35px]'>
          <h3 className='sm:text-2xl text-3xl text-center  font-bold sm:mb-11 mb-6'>
            Get in touch
          </h3>
          <div className='text-xl sm:ml-14 sm:mb-16 mb-8'>
            <h4 className='font-bold mb-2'>Visit Us</h4>
            <a href='https://maps.app.goo.gl/f8DDU54A4fH1LDn2A'>
              Anvottem, Curtorim, Salcete, Goa - 403709
            </a>
          </div>
          <div className='text-xl sm:ml-14 sm:mb-16 mb-8'>
            <h4 className='font-bold mb-2'>Call Us</h4>
            <a href='tel:+919890660667'>+91 98906 60667</a>
          </div>
          <div className='text-xl sm:ml-14 sm:mb-16 mb-8'>
            <h4 className='font-bold mb-2'>Chat with us</h4>
            <a href='mailto:carmelchapelcurtorim@gmail.com'>
              carmelchapelcurtorim@gmail.com
            </a>
          </div>
          <div className='text-xl sm:ml-14 sm:mb-16 mb-8'>
            <h4 className='font-bold mb-2'>Social Media</h4>
          </div>
        </div>
        <div className='w-full sm:w-[60%]  text-center py-6 mb-4 flex flex-col items-center sm:items-end'>
          <form className='flex flex-col w-full text-left Livvic-Medium px-4 sm:px-36'>
            <div className='flex flex-col items-end mb-4 w-full'>
              <label
                htmlFor='first-name'
                className='font-medium text-lg sm:text-2xl leading-6 text-[#80011F] text-left sm:mb-2 mb-1 self-start'
              >
                Name
              </label>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:leading-6 bg-[#FFF5E1] px-2 h-10 sm:h-12 sm:text-lg text-md'
              />
            </div>
            <div className='flex flex-col items-end mb-4 w-full'>
              <label
                htmlFor='email'
                className='font-medium text-lg sm:text-2xl leading-6 text-[#80011F] text-left sm:mb-2 mb-1 self-start'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                className='w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:leading-6 bg-[#FFF5E1] px-2 h-10 sm:h-12 sm:text-lg text-md'
              />
            </div>
            <div className='flex flex-col items-end mb-4 w-full'>
              <label
                htmlFor='subject'
                className='font-medium text-lg sm:text-2xl leading-6 text-[#80011F] text-left sm:mb-2 mb-1 self-start'
              >
                Subject
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                autoComplete='subject'
                className='w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:leading-6 bg-[#FFF5E1] px-2 h-10 sm:h-12 sm:text-lg text-md'
              />
            </div>
            <div className='flex flex-col items-end mb-4 w-full'>
              <label
                htmlFor='subject'
                className='font-medium text-lg sm:text-2xl leading-6 text-[#80011F] text-left sm:mb-2 mb-1 self-start'
              >
                Message
              </label>
              <textarea
                id='about'
                name='about'
                rows='7'
                className='w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:leading-6 bg-[#FFF5E1] p-2 sm:text-lg text-md'
              />
            </div>

            <div className='w-full flex items-center justify-center sm:justify-end'>
              <button
                type='submit'
                className='my-2 rounded-md bg-[#80011F] px-10 py-2 text-sm font-semibold text-[#FFF5E1] shadow-sm border-2 hover:border-[#80011F] hover:bg-[#FFF5E1] hover:text-[#80011F]'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
