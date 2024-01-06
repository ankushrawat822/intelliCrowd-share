import React from 'react'

const Header = () => {
  return (
    <>
        <div className='bg-red-500 py-3 flex items-center justify-between px-8 text-white'>
            <b className='text-[25px]'>IntelliCrowd</b>
            
             <div className="flex items-center justify-center gap-11">

             <p>Refresh</p>
             <p>Total Earning : <b>12 RS</b> </p>

             </div>
            
        </div>
    </>
  )
}

export default Header