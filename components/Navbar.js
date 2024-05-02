import React from 'react';
import Logo from '@/images/logo.png';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex h-36 w-full bg-white sticky justify-start items-center px-5'>
            <Image
                src={Logo}
                height={100}
                width={100}
                alt='Logo'
                className='ms-14'
            />
        </div>
    )
}

export default Navbar