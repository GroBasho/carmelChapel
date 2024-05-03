"use client";
import React from "react";
import AssociationCard from "@/components/AssociationCard";

const page = () => {
    return (
        <div className='bg-white w-full h-auto py-16 flex flex-wrap justify-around gap-y-12'>
            <AssociationCard
                associationName='Fabrica'
                info='
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores modi asperiores magni nulla, a harum nam numquam aperiam repellat, perferendis odio. Debitis laboriosam ex quia velit minima ab pariatur?'
                members='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, accusamus.'
            />
            <AssociationCard
                associationName='Fabrica'
                info='
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores modi asperiores magni nulla, a harum nam numquam aperiam repellat, perferendis odio. Debitis laboriosam ex quia velit minima ab pariatur?'
                members='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, accusamus.'
            />
            <AssociationCard
                associationName='Fabrica'
                info='
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores modi asperiores magni nulla, a harum nam numquam aperiam repellat, perferendis odio. Debitis laboriosam ex quia velit minima ab pariatur?'
                members='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, accusamus.'
            />
        </div>
    )
}

export default page