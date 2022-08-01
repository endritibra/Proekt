import React from "react";
import Coder from "../Assets/coding.png"
import Designer from "../Assets/graphic-designer.png"
import SEOer from "../Assets/search-engine-optimization.png";


const Card=()=>{
return(

   <div className="w-full py-[10rem] px-4 bg-white">
    <h2 className="font-bold text-6xl mb-20 text-center mt-[-5%] font-roboto ">HIRING</h2>
    
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 shadow-md">

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 cursor-pointer bg-[#ffffff]">
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Coder} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">Web Designer</h2>
            <p className="text-center text-4xl font-bold">Two Developers</p>
            <div className="text-center font-medium">
                <p className="py-2 flex justify-center border-b mx-8 mt-8">Requirements:</p>
                <p className="py-2 flex justify-center align-middle border-b mx-8 mt-8">HTML,CSS</p>
                <p className="py-2 border-b mx-8 mt-8">JS</p>

            </div>
            <button className="my-6 p-1 text-xl w-[150px] bg-[#ff0066] mx-auto text-white font-bold rounded-md">More</button>
        </div>


        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 cursor-pointer">
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Designer} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">Web Developers</h2>
            <p className="text-center text-4xl font-bold">One Designer</p>
            <div className="text-center font-medium">
                <p className="py-2 flex justify-center border-b mx-8 mt-8">Requirements:</p>
                <p className="py-2 flex justify-center align-middle border-b mx-8 mt-8">Photoshop</p>
                <p className="py-2 border-b mx-8 mt-8">Figma</p>

            </div>
            <button className="my-6 p-1 text-xl w-[150px] bg-[#000000] mx-auto text-white font-bold rounded-md">More</button>
        </div>



        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 cursor-pointer">
            <img className="w-20 mx-auto mt-[-3rem] bg-white" src={SEOer} alt="" />
            <h2 className="text-2xl font-bold text-center py-8">SEO Optimizers</h2>
            <p className="text-center text-4xl font-bold">One SEO Eng.</p>
            <div className="text-center font-medium">
                <p className="py-2 flex justify-center border-b mx-8 mt-8">Requirements:</p>
                <p className="py-2 flex justify-center align-middle border-b mx-8 mt-8">SEO Optimization</p>
                <p className="py-2 border-b mx-8 mt-8">SManagement</p>

            </div>
            <button className="my-6 p-1 text-xl w-[150px] bg-[#ff0066] mx-auto text-white font-bold rounded-md">More</button>
        </div>



    </div>


   </div>

)

}



export default Card