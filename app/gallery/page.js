"use client";
import { gallery } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className='w-full flex flex-col gap-16'>
            <div className="w-full flex justify-center items-center pt-10">
                <h1 className="Albir-Regular sm:text-5xl burgundy border-b-2 border-b-[yellow] w-fit">Gallery</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-5 justify-center items-center gap-5">
                {gallery.map((pics) => (
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src={pics.imgUrl}
                            key={pics.key}
                            alt={pics.key}
                            width={300}
                            height={200}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page