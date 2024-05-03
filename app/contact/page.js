"use client";
import React from "react";
// 80011F
const Contact = () => {
  return (
    <div className='bg-white text-black w-screen p-0 h-[60vh] pb-10'>
      <h1 className='text-center text-3xl'>Contact Us</h1>
      <div className='p-0 m-0 container flex sm:flex-row flex-col-reverse w-full h-full justify-center items-center'>
        <div className='sm:w-[45%] w-full text-center bg-[#FFF5E1] h-full'>
          Sidebar
        </div>
        <div className='sm:w-[55%]  w-full h-full text-center self-center p-6 mb-4'>
          <form className='flex flex-col justify-center items-center text-left mx-6'>
            <label
              for='first-name'
              class='text-sm font-medium leading-6 text-[#80011F] text-left w-9/12'
            >
              Name
            </label>
            <input
              type='text'
              name='first-name'
              id='first-name'
              autocomplete='given-name'
              class='w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#FFF5E1] pl-2'
            />
            <label
              for='email'
              class='text-sm font-medium leading-6 text-[#80011F] text-left w-9/12'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              autocomplete='email'
              class='w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#FFF5E1] pl-2'
            />
            <label
              for='subject'
              class='text-sm font-medium leading-6 text-[#80011F] text-left w-9/12'
            >
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              autocomplete='subject'
              class='w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#FFF5E1] pl-2'
            />
            <label
              for='about'
              class='block text-sm font-medium leading-6 text-[#80011F] text-left w-9/12'
            >
              About
            </label>
            <textarea
              id='about'
              name='about'
              rows='3'
              class='w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#80011F] placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-[#FFF5E1]'
            ></textarea>
            <div className='w-9/12 flex items-center justify-end'>
              <button
                type='submit'
                class='my-2 rounded-md bg-[#80011F] px-10 py-2 text-sm font-semibold text-[#FFF5E1] shadow-sm hover:border-2 hover:border-[#80011F] hover:bg-[#FFF5E1] hover:text-[#80011F]'
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
