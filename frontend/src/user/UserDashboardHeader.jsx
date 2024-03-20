import { UserButton } from '@clerk/clerk-react'
import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './userDashboardComponents/Sidebar'

const UserDashboardHeader = ({email , userData}) => {

   // console.log(userData)
 

  return (
     <>


<div className='bg-red-500 py-2 flex items-center justify-between px-6 text-white'>
           
            <div className='flex items-center justify-center gap-4'> 

               <div> <Sidebar></Sidebar></div> 
                  
               <p className='text-[16px]  font-bold'>IntelliCrowd</p>
            </div>
            
             <div className="flex items-center justify-center gap-11">
             {
               email?
                  <p>{email}</p>
              :    
                <Link to="/">go back</Link>
             }
             
             <p className='cursor-pointer' >Refresh</p>
             <p>Total Earning : <b> {1} Rs</b> </p>

             <UserButton />

             </div>
            
        </div>

     </>
  )
}

export default UserDashboardHeader