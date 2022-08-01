import React from "react";
import logo from '../Assets/A88Lab_Logo.jpg';
import tw from '../Assets/twitter(1).png';

import fb from '../Assets/facebook(1).png';
import insta from '../Assets/instagram.png';

const Footer = () =>{

return (

    <div className="bg-black h-24">
      
      <footer class="p-6   px-10 shadow flex flex-row justify-center items-end md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
       
        <img src={logo} className='w-16 h-14 hover:scale-105' />
     <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://a88lab.com/" class="hover:underline">A88LAB. NMK-SUISSE </a>&copy; All Rights Reserved.
    </span>

    <ul class="flex flex-wrap items-center mt-3  text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="px-1 md:px-5">
            <img src={insta} className='bg-white  h-6 w-6 md:h-10 md:w-10' alt="" />
        </li>
        <li className="px-1 md:px-5">
        <img src={tw} className='bg-white h-6 w-6 md:h-10 md:w-10' alt="" />
        </li>
        <li className="px-1 md:px-5">
        <img src={fb} className='bg-white h-6 w-6 md:h-10 md:w-10' alt="" />
        </li>
        
    </ul>
</footer>

    </div>



)



}









export default Footer