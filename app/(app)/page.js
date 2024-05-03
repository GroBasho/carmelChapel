'use client'
import Hero from '@/components/Hero';
import Logo from '@/images/transparentLogo.png';
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [readToggle, setReadToggle] = useState(false);

  const toggleTruncation = () => {
    setReadToggle(!readToggle);
  }

  return (
    <main className=" bg-white">
      <Hero/>

      <div  className="relative about bg-[#80011F] p-4 py-10">
        <h3 className='Abril-Regular text-5xl text-center absolute bg-[#80011F] inset-x-1/4 top-5 px-4'>ABOUT</h3>
        <div className="about-content border-4 border-[#FFF5E1] rounded-3xl  flex flex-col-reverse p-5 px-10 pt-12 justify-center content-center gap-y-12  lg:flex-row lg:justify-between lg:items-center lg:p-12 lg:px-20 lg:gap-x-10">
            <p className={`Livvic-Medium text-justify lg:max-w-2xl line-clamp-5`} onClick={toggleTruncation}>
            Curtorim is a picturesque, tranquil and serene village with hills and hillocks with green paddy fields and an array of coconut palm trees with various water bodies, specially the lakes and ponds amongst the khazan lands, River Zuari flowing along the village border gives the village a unique character. To the eastern part of the village lies the Karminagar area with a prominent Chapel, devoted to the Lady of Carmel.
The Chapel is situated at a distance of 2.5 km from the main St. Alex Church of Curtorim and it is situated along the road leading from Margao to Macazana. The Chapel was built by the residents of Dongorpelem, Curtorim and Fr. Inacio da Cunha, in 1780-82 was erected by the provision dated 22.11.1782 and it was thrown open to the public on 22-11-1782. Nossa Senhora do Carmo Chapel (Carmel Chapel/ Carmi Copel) at Vanvottem (Anvottem ) in Kurhtori (Curtorim) is one of the outstanding examples of chapels – the other two chapels, (Nossa Senhora do Rosario Chapel at Mavadd (Fatorda) in 1769, and St. Joaquim Chapel at Boddem (Borda) in Morhgoum (Margao) in 1783-1786 (Source: “Shrines and Mansions of Goa” in MARG (Golden Goa), Bombay, pg 71 by Dr. Jose Pereira – a son of Curtorim. He also presented a façade of Carmel Chapel in MARG. Fig 11, pg 74 in “Rococo Goa”
 The Chapel was earlier called as “Dongorpelem Chapel” as in the olden days, people had to traverse the hillock of Paldem, to reach the place and to go for the onward journey namely Macazana and Chandor. It is at this place one can find a DOVONNEM, a head rest to the weary travellers to keep their merchandise and to take rest. The said ‘dovonnem’ is still maintained although it has undergone many modifications. The present road going from Margao to Macasana did not exist then and as per records, it is only around 1890 that the present road was built. 
The Chapel did not have a resident Chaplain hence priests from the Church used to conduct the essentials services. it was under the dynamic initiative of Fr. Joanito Cromacio Mascarenhas,  the work for the construction of residence started ( ) which was later inaugurated during the tenure of Fr. Joaquim Paulo Joao Avertano Dias Alberto on 25.04.1957. as the population of the area started to increase, the main hall became insufficient for the devotees. Realising the need for the expansion, a side wing was opened and later still another wing on the right side was also opened during the tenure of Fr. Saude Pereira thus providing ample space for the devotees.
As all these were short term measures, a detailed plan was drawn out during the tenure of Fr. Anthony Rodrigues, although it could not be materialised owing to the sudden transfer on promotion as Parish Priest. Fr. Louis Alvares who followed next was very passionate about the construction of the new chapel but again owing to his sudden transfer, the plan had to be shelved once again.

            </p>
            <Image 
              className="self-center"
              src={Logo}
              alt="chapel logo"
              priority
            />
        </div>
      </div>
      
      <div className="events bg-[#FFF5E1]">
test
      </div>
    </main>
  );
}
