"use client";
import Link from "next/link";
import { navLink } from "@/constants";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className='h-fit w-full bg-white sm:bg-[#FFF5E1] sm:px-28 sm:pt-9 sm:pb-4 py-2 text-[#80011F] Livvic-Medium sm:text-xl text-md text-center sm:text-left'>
      <div className='flex sm:flex-row flex-col justify-center items-center '>
        <div className='w-full'>
          <h3 className='sm:text-5xl text-3xl Abril-Regular uppercase '>
            Our Lady of <br />
            Carmel Chapel
          </h3>
          <p className='sm:my-3.5 mt-3.5 uppercase'>Curtorim, Goa</p>
          <div className=''>
            <span className=''>carmelchapelcurtorim@gmail.com</span>
            <span className='mx-2 hidden sm:inline-flex'>|</span>
            <br className='sm:hidden' />
            <span className=''>Tel: +91 98906 60667 </span>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-end items-center sm:gap-20 text-black w-full text-xl my-3.5'>
          {navLink.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`${pathname == link.href
                ? "Livvic-Bold text-[#80011F]"
                : "Livvic-Medium text-[#80011F]"
                } cursor-pointer hover:text-[#80011F] hover:font-extrabold`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <p className='text-center sm:mt-10 text-sm'>
        &#169;&nbsp;Copyright 2024 All rights reserved. Developed & Maintained
        by GroBashO
      </p>
    </div>
  );
};

export default Footer;
