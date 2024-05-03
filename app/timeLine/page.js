"use client";
import React from "react";
import Timeline from "@/images/timeLine.png";
import TimeLineHero from "@/images/timeline1.jpg";
import TimeLineHero1 from "@/images/timeline2.jpg";
import TimeLineHero2 from "@/images/timeline3.jpg";
import TimeLineHero3 from "@/images/timeline4.jpg";
import Image from "next/image";
import { priestsTimeline } from "@/constants";

const page = () => {
    return (
        <div className='w-full flex flex-col gap-16'>
            <div className="w-full flex justify-center items-center pt-10">
                <h1 className="Albir-Regular sm:text-5xl burgundy border-b-2 border-b-[yellow] w-fit">Priests Timeline</h1>
            </div>
            <div className="w-full flex flex-col-reverse sm:flex-row">
                <div className="lg:w-6/12 flex flex-col justify-between h-full lg:gap-[75px]">
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
        </div>
    )
}

export default page