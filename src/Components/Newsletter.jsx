import React from "react";

const Newsletter = () =>{

return(


<div className="text-black bg-[#ff0066] mt-14">
        <div className="max-w-[1240px] p-4 mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 flex justify-center flex-col">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to up your game</h1>
                <p>Sign up for our Newsletter ...</p>
            </div>
            <div className="my-4 ">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="m-5 p-3 sm:w-[65%] w-[60%] bg-white rounded-md text-black" type="email" placeholder="Enter your email...." />
                    <button className="bg-[#1663ff]  w-[100px] rounded-md text-l my-10  mx-auto p-2 text-white"> Notify Me! </button>
                </div>

            </div>

        </div>




        

</div>


)


}

export default Newsletter