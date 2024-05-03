'use client';
import React, { useState } from 'react';
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { navLink } from '@/constants';
import { usePathname } from "next/navigation";
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const pathname = usePathname();
    const [toggleDropdown, settoggleDropdown] = useState(false);
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
                    <Link href={link.href}
                        key={link.name}
                        className={`${pathname == link.href ? 'Livvic-Bold text-[#4169E2]' : 'Livvic-Medium text-[#1E1E1E]'} cursor-pointer text-xl hover:text-[#4169E2]`}
                    >
                        {link.name}
                    </Link>
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
                                    <Link
                                        href={link.href}
                                        key={link.name}
                                        className={`${pathname == link.href ? 'Livvic-Bold text-[#4169E2]' : 'Livvic-Medium text-[#1E1E1E]'} cursor-pointer text-xl hover:text-[#4169E2]`}
                                        onClick={() => settoggleDropdown((prev) => !prev)}
                                    >
                                        {link.name}
                                    </Link>
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