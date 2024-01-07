import React from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie';

const Header = () => {
  const UserName = Cookies.get('username');
  
  return (
    <>
        <div className='bg-red-500 py-2 flex items-center justify-between px-8 text-white'>
            <b className='text-[25px]'>IntelliCrowd</b>
            
             <div className="flex items-center justify-center gap-11">
             {
              UserName?
                  <p>{UserName}</p>
              :    
                <Link to="/signup">Sign up</Link>
             }
             
             <p>Refresh</p>
             <p>Total Earning : <b>12 RS</b> </p>

             </div>
            
        </div>
    </>
  )
}

export default Header