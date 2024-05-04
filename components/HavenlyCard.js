import React from 'react'

const HavenlyCard = (props) => {
    return (
        <div key={props.name} className='flex flex-col h-40 justify-center items-center gap-3 p-5 rounded-3xl bg-[#FFF5E1] text-[#80011F] border-2 border-[#80011F]'>
            <div className='Abril-Regular text-2xl'>{props.name}</div>
            <div className='flex gap-1'>
                <div className='Livvic-Bold text-xl'>Origin:</div>
                <div className='Livvic-Semibold text-xl'>{props.origin}</div>
            </div>
        </div>
    )
}

export default HavenlyCard