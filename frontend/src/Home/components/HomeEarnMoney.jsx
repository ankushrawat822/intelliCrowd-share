import React from 'react'
import homeEarnMoneyImg from '../images/home-earn-money-1.png'

const HomeEarnMoney = () => {
    return (
        <>
            <div className='bg-[#161616] w-screen flex flex-col items-center justify-center gap-5 text-center sm:flex-col sm:items-center sm:justify-center  md:flex-row md:items-center md:gap-4 py-10  md:py-5 px-3 md:px-16 lg:px-20 md:text-start text-white '>
                {/* text contents */}
                <div className='w-full md:w-[44%] md:text-start'>
                    <p className='font-bold text-[24px] md:text-[28px] lg:text-[39px] lg:leading-[50px]'>Earn Money by Completing Tasks for AI Companies</p>
                    <p className='mt-4'>Join thousands of people and earn money by completing
                        tasks in the context of data annotation and collection
                        services for Al companies. Explore opportunities to earn.</p>
                    <button className='px-3 py-1 bg-red-500 rounded-[10px] mt-4 font-bold text-[20px]'>Get Started</button>
                </div>
                {/* img  */}
                <div className='w-full md:w-[25%] flex items-center justify-center' >
                <img className='' src={homeEarnMoneyImg} alt="" />
                </div>
                
            </div>
        </>
    )
}

export default HomeEarnMoney