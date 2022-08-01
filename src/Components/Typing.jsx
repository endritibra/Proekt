import React from 'react';
import Typed from 'react-typed';

const Typing = ()=>{
return(

<div className="text-white">
<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

    <p className="text-[#a9a9a9] font-bold p-2 text-2xl"> Growth Marketing Agency</p>
    <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold md:py-5">Grow with US!</h1>
    <div className="flex flex-row justify-center py-3">
        <p className="md:text-5xl sm:text-4xl text-xl p-3 py-4 whitespace-nowrap">Improve your business</p>
        <Typed
                          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-4'

                 strings={['SaaS', 'SMBs', 'Suisse']}
                 typeSpeed={100}
                 backSpeed={140}
                 loop
                 />
    </div>
        <button className='bg-[#ff0066] w-[200px] rounded-md text-2xl my-10  mx-auto p-3 font-bold hover:bg-white text-black hover:scale-110'>Get Started</button>
    </div>
</div>


)

}


export default Typing