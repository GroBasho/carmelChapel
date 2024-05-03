'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import FrLobo from '@/images/frPollyLobo.png';
import { text } from '@/constants';

const About = () => {
  const [hideDescription, setHideDescription] = useState(false);
  const [description, setDescription] = useState(text.slice(0, 596));

  // Regular expressions to find text within quotes and round brackets
  const quotedText = /"(.*?)"/g;

  // Function to wrap matched text with span and apply different styles
  const highlightText = (text, regex, className) => {
    return text.split(regex).map((part, index) => {
      if (index % 2 === 1) {
        // Text inside quotes or round brackets
        return <span key={index} className={className}>{part}</span>;
      } else {
        // Normal text
        return part;
      }
    });
  };

  function toggleDescription() {
    if (hideDescription === false) {
      setHideDescription(true);
      setDescription(text);
      return;
    }
    setHideDescription(false);
    setDescription(text.slice(0, 77))
  }

  const toggleSecondDiv = () => {
    setShowSecondDiv(!showSecondDiv);
  };

  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='w-full flex flex-col justify-center items-center md:pt-8 md:px-28'>
        <div className='sm:text-3xl md:text-5xl Abril-Regular burgundy border-b-2 border-b-[yellow]'>Priest in Our Lady Of Carmel Chaple</div>
        <div className='w-full h-auto my-10 flex flex-col-reverse md:flex-row justify-center items-center'>
          <div className='md:w-8/12 flex flex-col gap-4 p-5 sm:p-0'>
            <div className='Abril-Regular burgundy md:text-4xl sm:text-2xl text-center sm:text-start'>
              Rev. Fr. Polly Lobo
            </div>
            <div className='Livvic-Regular text-sm lightBlack md:ps-2 text-center sm:text-start'>
              Parish Priest - St. Alex Church, Curtorim
            </div>
            <div className='Livvic-Medium md:text-2xl burgundy break-all'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
              when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </div>
          </div>
          <div className='md:w-4/12'>
            <Image
              src={FrLobo}
              width={400}
              height={555}
              alt='frLobo'
            />
          </div>
        </div>
      </div>

      {/* History */}
      <div className='w-full h-auto relative flex flex-col bg-historyBg bg-opacity-10 bg-no-repeat bg-cover bg-center'>
        <div className='flex flex-col w-full h-full bg-[#80011F] bg-opacity-75 p-5 md:py-20 md:px-16 justify-center items-center gap-6'>
          <div className='Livvic-Regular sm:text-[32px] text-white'>
            History
          </div>

          <div className='md:w-7/12 Abril-Regular md:text-[40px] text-white text-center'>
            Discovering the History and Beauty
            <br /><span className='md:text-[32px]'>of</span>
            <br />Our Lady Of Carmel Chaple
          </div>

          <div className='Livvic-Medium sm:text-2xl text-center text-white md:break-normal break-all'>
            {highlightText(description, quotedText, 'yellow')} &nbsp;
            {description && description?.length > 60 && (
              <button
                className="underline text-[yellow]"
                onClick={toggleDescription}
              >
                {hideDescription ? "less" : "more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About