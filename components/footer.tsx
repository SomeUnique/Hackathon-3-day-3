import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-10 md:px-[135px] py-8 md:py-[50px]">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-sm md:text-base font-light mt-4">
            Dont wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        <div className="flex mt-6 md:mt-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-6 rounded-l-md focus:outline-none "
          />
          <Link href="/signup"><button className="text-[#FF9F0D] bg-white py-2 md:py-3 px-4 md:px-6 rounded-r-md">
            Subscribe Now
          </button></Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#FF9F0D] mx-10 md:mx-[135px]" />

      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto py-8 md:py-12 px-6 md:px-[135px] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        {/* About Us */}
        <div>
          <h2 className="mb-6 text-xl font-semibold uppercase">About Us</h2>
          <p className="text-sm text-gray-300">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-[#FF9F0D] flex items-center justify-center w-[77px] h-[71px] rounded">
              <PiClockClockwiseBold className="text-white text-3xl" />
            </div>
            <div>
              <p className="text-sm font-semibold">Opening Hours</p>
              <p className="text-xs">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-xs">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="mb-6 text-xl font-semibold uppercase">Useful Links</h2>
          <ul className="space-y-4 text-gray-300">
            {[<Link href="/about">About</Link>,"News", "Partner", <Link href="/chef">Team</Link>, <Link href="/menu">Menu</Link>,<Link href="/404error">Contact</Link>].map((data, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-white hover:underline">
                  {data}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="mb-6 text-xl font-semibold uppercase">Help?</h2>
          <ul className="space-y-4 text-gray-300">
            {[<Link href="/FAQ">FAQ</Link>, "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((data, index) => (
              <li key={index}> {/*Using index as key
               // eslint-disable-next-line react/jsx-key*/}
                <Link href="#" className="hover:text-white hover:underline">
                  {data}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="mb-6 text-xl font-semibold uppercase">Recent Post</h2>
          <ul className="space-y-6">
            
              <li className="flex gap-4">
                <Image src="/unsplash-2.png" alt="post" width={80} height={80}/>
                <div>
                  <p className="text-sm text-gray-400">Is fastfood good for your body?</p>
                  <p className="text-xs text-gray-200">February 28,2022</p>
                </div>
              </li>
            
          </ul>
          <ul className="space-y-6">
            
              <li className="flex gap-4">
                <Image src="/unsplash_CLMpC9UhyTo.png" alt="post" width={80} height={80} />
                <div>
                  <p className="text-sm text-gray-400 gap-1">Change your food habit With organic food</p>
                  <p className="text-xs text-gray-200">February 28,2022</p>
                </div>
              </li>
            
          </ul>
          <ul className="space-y-6">
            
              <li className="flex gap-4">
                <Image src="/unsplash-2.png" alt="post" width={80} height={80} />
                <div>
                  <p className="text-sm text-gray-400">Do you like fastfood for your life?</p>
                  <p className="text-xs text-gray-200">February 28,2022</p>
                </div>
              </li>
            
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#4F4F4F] py-6 px-4 md:flex md:justify-between md:items-center text-center md:text-left">
        <span className="text-sm text-gray-300">
        Copyright © 2022 Ayeman. All Rights Reserved.
        </span>
        <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
            <div key={index} className="bg-white w-9 h-9 flex items-center justify-center rounded">
              <Icon className="text-black" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;