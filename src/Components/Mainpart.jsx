import React from "react";
import conne from '../Assets/conn.png';

const Mainpart = ()=>{

return(
    <div className="grid grid-cols-1 p-4 md:grid-cols-2">

    <div className="flex flex-col justify-center text-white m-4 text-center ">
            <h2 className="text-white text-4xl p-3">Growth marketing agency </h2>
            <h4 className="text-2xl p-3">Based in Zürich, Switzerland with offices in Skopje,North Macedonia</h4>
            <p className="p-3"> We help Swiss startups, SMBs and SaaS companies through Demand
Generation, Inbound Marketing, Growth-Driven Websites and Hubspo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dolor voluptatem hic provident veniam vitae quos corrupti impedit quisquam! Ullam.</p>
    </div>

    <img src={conne} className="object-cover w-[30rem] md:w-[38rem] md:mt-0 mt-10 rounded-md ml-10"  alt="" />



    </div>


)


}









export default Mainpart;