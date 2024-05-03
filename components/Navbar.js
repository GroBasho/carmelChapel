'use client';
import React, { useState } from 'react';
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { navLink } from '@/constants';
import { usePathname } from "next/navigation";
import { Bars3Icon, ChevronDownIcon, XCircleIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const pathname = usePathname();
    const [toggleDropdown, settoggleDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className='flex sm:h-24 h-20 w-full bg-white sticky top-0 justify-between items-center z-50'>
            <Link href='/' className='cursor-pointer md:w-4/12 px-5'>
                <Image
                    src={Logo}
                    height={80}
                    width={80}
                    alt='Logo'
                    className='md:ms-14 h-12 w-12 sm:h-20 sm:w-20'
                />
            </Link>
            <div className='sm:flex justify-start items-center gap-28 text-black w-8/12 hidden px-5'>
                {navLink.map((link) => (
                    <div key={link.name} className="relative flex gap-2 items-center">
                        <Link
                            href={link.href}
                            className={`${pathname == link.href || (link.name == 'About' && (pathname == '/associations' || pathname == '/timeLine')) ? 'Livvic-Bold text-[#4169E2]' : 'Livvic-Medium text-[#1E1E1E]'} cursor-pointer text-xl hover:text-[#4169E2]`}
                        >
                            {link.name}
                        </Link>
                        {link.name == 'About' && link.subLinks && (<ChevronDownIcon height={20} width={20} onClick={() => setShowDropdown((prev) => !prev)} />)}
                        {link.subLinks && (
                            <div className={`absolute top-16 left-0 mt-1 bg-white border border-gray-200 shadow-md rounded-lg z-10 ${showDropdown ? 'block' : 'hidden'}`}>
                                {link.subLinks.map(sublink => (
                                    <Link
                                        key={sublink.name}
                                        href={sublink.href}
                                        onClick={() => setShowDropdown((prev) => !prev)}
                                        className={`${pathname == sublink.href ? 'Livvic-Bold text-[#4169E2]' : 'Livvic-Medium text-[#1E1E1E]'} block px-4 py-2 text-xl hover:bg-gray-100 cursor-pointer`}
                                    >
                                        {sublink.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <nav className='sm:hidden flex relative pr-5'>
                <div className='flex w-full'>
                    {toggleDropdown == false ? (
                        <Bars3Icon
                            width={40}
                            height={40}
                            onClick={() => settoggleDropdown((prev) => !prev)}
                        />
                    ) : (
                        <XCircleIcon
                            width={30}
                            height={30}
                            onClick={() => settoggleDropdown((prev) => !prev)}
                        />
                    )}

                    {toggleDropdown && (
                        <div className='absolute right-0 top-14 w-screen p-5  bg-white flex flex-col gap-2 justify-end items-end'>
                            {navLink.map((link) => {
                                return (
                                    <div key={link.name} className="relative flex gap-2 items-center">
                                        <Link
                                            href={link.href}
                                            className={`${pathname == link.href || (link.name == 'About' && (pathname == '/associations' || pathname == '/timeLine')) ? 'Livvic-Bold text-[#4169E2]' : 'Livvic-Medium text-[#1E1E1E]'} cursor-pointer text-xl hover:text-[#4169E2]`}
                                            onClick={() => settoggleDropdown((prev) => !prev)}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.name == 'About' && link.subLinks && (<ChevronDownIcon height={20} width={20} onClick={() => setShowDropdown((prev) => !prev)} />)}
                                        {link.subLinks && (
                                            <div className={`absolute top-16 right-0 mt-1 bg-white border border-gray-200 shadow-md rounded-lg z-10 ${showDropdown ? 'block' : 'hidden'}`}>
                                                {link.subLinks.map(sublink => (
                                                    <Link
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        onClick={() => {
                                                            setShowDropdown((prev) => !prev)
                                                            settoggleDropdown((prev) => !prev)
                                                        }}
                                                        className={`${pathname == sublink.href ? 'Livvic-Bold text-[#4169E2]' : 'Livvic-Medium text-[#1E1E1E]'} block px-4 py-2 text-xl hover:bg-gray-100 cursor-pointer`}
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar