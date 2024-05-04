"use client";
import React from "react";
import Timeline from "@/images/timeLine.png";
import TimeLineHero from "@/images/timeline1.jpg";
import TimeLineHero1 from "@/images/timeline2.jpg";
import TimeLineHero2 from "@/images/timeline3.jpg";
import TimeLineHero3 from "@/images/timeline4.jpg";
import Image from "next/image";
import { clergyFromCurtorim, havenlyHomeResting1, havenlyHomeResting2, nuns, priestFromCarmelArea, priestsTimeline } from "@/constants";
import ClergyCard from "@/components/ClergyCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import NunsCard from "@/components/NunsCard";
import CarmelArea from "@/components/CarmelArea";
import HavenlyCard from "@/components/HavenlyCard";

const page = () => {
    return (
        <div className='w-full flex flex-col gap-16'>
            <div className="w-full flex justify-center items-center pt-10">
                <h1 className="Albir-Regular sm:text-5xl burgundy border-b-2 border-b-[yellow] w-fit">Priests Timeline</h1>
            </div>
            <div className="w-full flex flex-col-reverse sm:flex-row">
                <div className="lg:w-6/12 flex flex-col justify-between h-full lg:gap-[72px]">
                    <Image
                        src={TimeLineHero}
                        height={800}
                        width={665}
                    />
                    <Image
                        src={TimeLineHero1}
                        height={800}
                        width={665}
                    />
                    <Image
                        src={TimeLineHero2}
                        height={800}
                        width={665}
                    />
                    <Image
                        src={TimeLineHero3}
                        height={600}
                        width={665}
                    />
                </div>
                <div className="lg:w-6/12 w-full flex flex-col h-full bg-[#80011F] relative lg:ps-16 lg:pt-24 px-8 py-5 lg:gap-10 gap-5 text-white even:justify-items-end">
                    <Image
                        src={Timeline}
                        height={1391}
                        width={70}
                        className="absolute lg:-left-10 left-0 h-full top-0 w-10 lg:w-16 hidden lg:block"
                    />
                    {priestsTimeline.map((priest) => (
                        <div key={priest.No} className="flex flex-col lg:gap-5 gap-1 odd:items-end md:odd:items-start max-[640px]:border-b-2">
                            <div className="Abril-Regular lg:text-3xl text-xl">{priest.Name}</div>
                            <div className="Livvic-Semibold lg:text-2xl">{priest.Year}</div>
                            <div className="Livvic-Semibold lg:text-2xl">{priest.Origin}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:block hidden">
                <div className="w-full flex justify-center items-center pt-10">
                    <h1 className="Albir-Regular sm:text-4xl burgundy border-b-2 border-b-[yellow] w-fit">CLERGY FROM OUR LADY OF CARMEL CHAPEL CURTORIM</h1>
                </div>
                <div className="flex p-10 gap-4">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper grid grid-cols-3"
                    >
                        {clergyFromCurtorim.map((clergy) => (
                            <SwiperSlide key={clergy.key}>
                                <ClergyCard
                                    img={clergy.imgUrl}
                                    name={clergy.name}
                                    ward={clergy.ward}
                                    dob={clergy.dob}
                                    ordained={clergy.ordained}
                                    location={clergy.location}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="md:hidden p-5">
                <div className="w-full flex justify-center items-center pt-10">
                    <h1 className="Abril-Regular sm:text-4xl burgundy border-b-2 border-b-[yellow] w-fit text-center">CLERGY FROM OUR LADY OF CARMEL CHAPEL CURTORIM</h1>
                </div>
                <div className="flex p-10 gap-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper grid grid-cols-3"
                    >
                        {clergyFromCurtorim.map((clergy) => (
                            <SwiperSlide key={clergy.key}>
                                <ClergyCard
                                    img={clergy.imgUrl}
                                    name={clergy.name}
                                    ward={clergy.ward}
                                    dob={clergy.dob}
                                    ordained={clergy.ordained}
                                    location={clergy.location}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="md:block hidden">
                <div className="w-full flex justify-center items-center pt-10">
                    <h1 className="Albir-Regular sm:text-4xl burgundy border-b-2 border-b-[yellow] w-fit">NUNS FROM OUR LADY OF CARMEL CHAPEL CURTORIM</h1>
                </div>
                <div className="flex p-10 gap-4">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper grid grid-cols-3"
                    >
                        {nuns.map((nun) => (
                            <SwiperSlide key={nun.key}>
                                <NunsCard
                                    img={nun.imgUrl}
                                    name={nun.name}
                                    ward={nun.ward}
                                    dob={nun.dob}
                                    prof={nun.profession}
                                    location={nun.location}
                                    pos={nun.pos}
                                    cong={nun.cong}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="md:hidden p-5">
                <div className="w-full flex justify-center items-center pt-10">
                    <h1 className="Albir-Regular sm:text-4xl burgundy border-b-2 border-b-[yellow] w-fit text-center">NUNS FROM OUR LADY OF CARMEL CHAPEL CURTORIM</h1>
                </div>
                <div className="flex p-10 gap-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper grid grid-cols-3"
                    >
                        {nuns.map((nun) => (
                            <SwiperSlide key={nun.key}>
                                <NunsCard
                                    img={nun.imgUrl}
                                    name={nun.name}
                                    ward={nun.ward}
                                    dob={nun.dob}
                                    prof={nun.profession}
                                    location={nun.location}
                                    pos={nun.pos}
                                    cong={nun.cong}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="w-full flex justify-center items-center pt-10">
                    <h1 className="Albir-Regular sm:text-4xl burgundy border-b-2 border-b-[yellow] w-fit text-center">PRIESTS FROM CARMEL CHAPEL AREA</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-14">
                    {priestFromCarmelArea.map((item) => (
                        <CarmelArea
                            name={item.name}
                            location={item.curr}
                            origin={item.origin}
                        />
                    ))}
                </div>
            </div>

            <div className="md:block hidden">
                <div className="w-full flex justify-center items-center pt-10">
                    <h1 className="Albir-Regular sm:text-4xl burgundy border-b-2 border-b-[yellow] w-fit">NUNS FROM OUR LADY OF CARMEL CHAPEL CURTORIM</h1>
                </div>
                <div className="flex p-10 gap-4">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper grid grid-cols-3"
                    >
                        {havenlyHomeResting1.map((item) => (
                            <SwiperSlide key={item.id}>
                                <HavenlyCard
                                    name={item.name}
                                    origin={item.origin}
                                />
                            </SwiperSlide>
                        ))}
                        {havenlyHomeResting2.map((item) => (
                            <SwiperSlide key={item.id}>
                                <HavenlyCard
                                    name={item.name}
                                    origin={item.origin}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default page