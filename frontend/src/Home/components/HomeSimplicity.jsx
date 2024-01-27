import React from 'react'
import homeEarnMoneyImg from '../images/home-simipicity.png'

const HomeSimplicity = () => {
  return (
    <>
    <div className='bg-[#161616] w-screen flex flex-col items-center justify-center gap-5  text-center sm:flex-col sm:items-center sm:justify-center  md:flex-row md:items-center md:gap-10 py-10  md:py-5 lg:py-0 px-3 md:px-16 lg:px-20 md:text-start text-white '>
       
        {/* img  */}
        <div className='w-full md:w-[25%] flex items-center justify-center md:justify-start ' >
        <img className='' src={homeEarnMoneyImg} alt="" />
        </div>


         {/* text contents */}
         <div className='w-full md:w-[44%] md:text-start lg:ml-14'>
            <p className='font-bold text-[24px] md:text-[28px] lg:text-[39px] lg:leading-[50px]'>Simplicity is key</p>
            <p className='mt-4'> Dive into AI with clear tasks, bite-sized and fun. We ditch the complexity, keeping things engaging. Jump in, jump out, your progress waits. Earning's easy too – transparent, fast, and trackable.</p>
            <button className='px-3 py-1 bg-red-500 rounded-[10px] mt-4 font-bold text-[20px]'>Know More</button>
        </div>
        
    </div>
</>
  )
}

export default HomeSimplicity

