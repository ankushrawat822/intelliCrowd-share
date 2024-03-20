import React , {useEffect, useState} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import TaskListA from '../companyA/TaskListA'
import UserDashboardHeader from './UserDashboardHeader';

// clerk
import { useUser } from '@clerk/clerk-react';


const UserDashboard = () => {

  const { user } = useUser();
   
   const [email , setEmail] = useState(user.primaryEmailAddress.emailAddress)

   const [userData , setUserData] = useState()
   


  //  const [refreshState , setRefereshState] = useState(true)
  //  const [moneyEarned , setMoneyEarned] = useState()
  

  useEffect(() => {
     
   const fetchData = async () => {

      
      console.log(user.primaryEmailAddress.emailAddress)

      setEmail(user.primaryEmailAddress.emailAddress)

      const userEmail = user.primaryEmailAddress.emailAddress

     await axios.post('http://localhost:8080/api/me', { email : userEmail }) // Send a POST request with email in the body
     .then(response => {
      const user = response.data; // Access the user data from the response
      setUserData(user)
     const money = user.tasks[0].earnedMoney // Access the tasks array from the user object

      // console.log(tasks);
      // setMoneyEarned(money)

       

      // Do something with the tasks data, e.g., display it in your UI
    })
    .catch(error => {
      console.error(error);
      // Handle errors gracefully, e.g., display an error message to the user
    });
      
    };

    fetchData()


  }, [])

  
  return (

    <>  
     <UserDashboardHeader email={email} userData={userData}></UserDashboardHeader>

     <div className='flex items-center justify-center w-[100vw] mt-12'>
        {/* task list div */}
        <div className=' lg:w-[45vw] md:w-[80vw] w-[90vw]'>
        {/* <p>{userEmail}</p> */}
            {/*  map of all tasks ( for this testing there will be only one ) */}
             <TaskListA email={email}></TaskListA>
            
        </div>
    </div>

    </>
   
  )
}

export default UserDashboard

// components
// 1) 