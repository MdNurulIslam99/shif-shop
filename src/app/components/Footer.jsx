import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import frame from "../../../public/Group.png";
export default function Footer() {
  return (
    <div className=" flex justify-around items-center gap-5 bg-[#062D3E] h-[300px] ">
      <div>
        <h1 className="Shop-First text-lg font-semibold text-[#ED5C01]">
          Shop-First
        </h1>
      </div>
      <div>
        <Image src={frame} className="w-[200px] h-[150px]"></Image>
      </div>
      <div className="space-y-4">
        <div>
          <ul className="flex space-x-4 text-white">
            <li>About</li>
            <li>Project</li>
            <li>Service</li>
            <li>Client</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex  gap-5 text-white">
          <p>Flow</p>
          <ul className="flex space-x-4 items-center">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
