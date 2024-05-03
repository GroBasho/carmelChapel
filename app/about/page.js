'use client';
import Image from 'next/image';
import React from 'react';
import FrLobo from '@/images/frPollyLobo.png';

const About = () => {
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
              <b className='yellow'> since the 1500s</b>, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
              when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever <b className='yellow'>since the 1500s</b>.
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
            Curtorim is a picturesque, tranquil and serene village with hills and hillocks with green paddy fields
            and an array of coconut palm trees with various water bodies, specially the lakes and ponds amongst
            the khazan lands, River Zuari flowing along the village border gives the village a unique character.
            To the eastern part of the village lies the Karminagar area with a prominent Chapel, devoted to the
            Lady of Carmel. The Chapel is situated at a distance of 2.5 km from the main St. Alex Church of Curtorim
            and it is situated along the road leading from Margao to Macazana. The Chapel was built by the residents
            of <b className='yellow'>Dongorpelem</b>, <b className='yellow'>Curtorim</b> and
            <b className='yellow'>Fr. Inacio da Cunha</b>, in <b className='yellow'>1780-82</b> was erected by the
            provision dated <b className='yellow'>22-11-1782</b> and it was thrown open to the public on 22-11-1782.
            Nossa Senhora do Carmo Chapel (Carmel Chapel/ Carmi Copel) at Vanvottem(Anvottem) in Kurhtori(Curtorim)
            is one of the outstanding examples of chapels – the other two chapels, (Nossa Senhora do Rosario Chapel
            at Mavadd(Fatorda) in <b className='yellow'>1769</b>, and St. Joaquim Chapel at Boddem(Borda) in Morhgoum(Margao) in <b className='yellow'>1783-1786</b>)
            Source: “Shrines and Mansions of Goa” in MARG(Golden Goa), Bombay, by <b className='yellow'>Dr. Jose Pereira</b>
            – a son of Curtorim. He also presented a façade of Carmel Chapel in MARG in “Rococo Goa”
          </div>
          <div className='Livvic-Medium sm:text-2xl text-center text-white md:break-normal break-all'>
            The Chapel was earlier called as <b className='yellow'>Dongorpelem Chapel</b> as in the olden days, people had to traverse the
            hillock of Paldem, to reach the place and to go for the onward journey namely Macazana and Chandor. It
            is at this place one can find a <b className='yellow'>DOVONNEM</b>, a head rest to the weary travellers to keep their merchandise
            and to take rest. The said ‘dovonnem’ is still maintained although it has undergone many modifications.
            The present road going from Margao to Macasana did not exist then and as per records, it is only
            around 1890 that the present road was built. The Chapel did not have a resident Chaplain hence priests
            from the Church used to conduct the essentials services. it was under the dynamic initiative of
            Fr. Joanito Cromacio Mascarenhas,  the work for the construction of residence started ( ) which was
            later inaugurated during the tenure of Fr. Joaquim Paulo Joao Avertano Dias Alberto on 25.04.1957. as
            the population of the area started to increase, the main hall became insufficient for the devotees.
            Realising the need for the expansion, a side wing was opened and later still another wing on the right
            side was also opened during the tenure of Fr. Saude Pereira thus providing ample space for the devotees.
            As all these were short term measures, a detailed plan was drawn out during the tenure of Fr. Anthony
            Rodrigues, although it could not be materialised owing to the sudden transfer on promotion as Parish Priest.
            Fr. Louis Alvares who followed next was very passionate about the construction of the new chapel but again
            owing to his sudden transfer, the plan had to be shelved once again.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About