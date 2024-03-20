import React , {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';


const Header = () => {

  
    const UserName = Cookies.get('username');

    const [moneyEarned , setMoneyEarned] = useState()

    const [refreshState , setRefereshState] = useState(true)

    
    useEffect(() => {
      // window.location.reload() 

      axios.post('http://localhost:8080/api/me', { email : UserName }) // Send a POST request with email in the body
      .then(response => {
        const user = response.data; // Access the user data from the response
       const money = user.tasks[0].earnedMoney // Access the tasks array from the user object

        // console.log(tasks);
        setMoneyEarned(money)

        // Do something with the tasks data, e.g., display it in your UI
      })
      .catch(error => {
        console.error(error);
        // Handle errors gracefully, e.g., display an error message to the user
      });

    }, [refreshState])
    
   

  
  return (
    <>
        <div className='bg-red-500 py-2 flex items-center justify-between px-8 text-white'>
            <b className='text-[25px]'>IntelliCrowd</b>
            
             <div className="flex items-center justify-center gap-11">
             {
              UserName?
                  <p>{UserName}</p>
              :    
                <Link to="/user-signup">Sign up</Link>
             }
             
             <p className='cursor-pointer' onClick={()=>{setRefereshState(prev => !prev)}}>Refresh</p>
             <p>Total Earning : <b> {moneyEarned} Rs</b> </p>

             </div>
            
        </div>
    </>
  )
}

export default Header