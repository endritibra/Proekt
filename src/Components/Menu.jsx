import React,{useState} from "react";
import {TiThMenuOutline} from 'react-icons/ti';
import logo from '../Assets/A88Lab_Logo.jpg';


console.log(logo)




const Menu = ()=>{
    const [navi,setNav] = useState(false);
    const handleNav = ()=>{
        setNav(!navi);
    }



return(

    <div className="flex justify-between items-center h-24  mx-auto  mb-10 px-4 py-5 text-white bg-black md:bg-[#ff0066]">
        
        <img src={logo} className="object-cover h-[5.5rem] w-30 mt-2 ml-8 p-2"  alt="" />
        <ul className="flex flex-row text-sm justify-center  invisible px-2 font-presstart sm:text-2xl md:visible text-white font-roboto">
            <li className="px-5">Home</li>
            <li className="px-5">Vision</li>
            <li className="px-5">About</li>
            <li className="px-5">Contact</li>
         </ul>

    <div onClick={handleNav} className='block md:hidden'>
        <TiThMenuOutline size={25} className='mr-5'/>
    </div>


        <ul className={navi ? ' fixed left-0 top-0 w-[47%] h-full border-r border-r-gray-900 bg-[#ff0066] px-12 text-white ease-in-out duration-300 md:invisible' : 'ease-in-out duration-400 fixed left-[-100%]'} >
        <img src={logo} className="object-cover h-[5.5rem] w-30 mt-2 mb-10"  alt="" />
          <li className='p-5 text-xl border-b border-gray-400'>Home</li>
          <li className='p-5 text-xl border-b border-gray-400'>Vision</li>
          <li className='p-5 text-xl border-b border-gray-400'>About</li>
          <li className='p-5 text-xl'>Contact</li>




        </ul>




</div>

)





}


export default Menu;