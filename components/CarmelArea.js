import React from 'react'

const CarmelArea = (props) => {
    return (
        <div key={props.name} className='flex flex-col justify-center items-center gap-3 p-5 rounded-3xl bg-[#80011F] text-[#FFF5E1] border-2 border-[yellow]'>
            <div className='Abril-Regular text-2xl'>{props.name}</div>
            <div className='flex gap-1'>
                <div className='Livvic-Bold text-xl'>Origin:</div>
                <div className='Livvic-Semibold text-xl'>{props.origin}</div>
            </div>
            <div className='flex gap-1'>
                <div className='Livvic-Bold text-xl'>Current Location:</div>
                <div className='Livvic-Semibold text-xl'>{props.location}</div>
            </div>
        </div>
    )
}

export default CarmelArea