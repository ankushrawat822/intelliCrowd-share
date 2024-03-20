import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { CiBookmarkCheck } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";

const TaskListA = ({ email }) => {

  const [tasksData, setTasksData] = useState([])


  useEffect(() => {

    axios.post('http://localhost:8080/api/me', { email }) // Send a POST request with email in the body
      .then(response => {
        const user = response.data; // Access the user data from the response
        const tasks = user.tasks; // Access the tasks array from the user object

        // console.log(tasks);
        setTasksData(tasks)
       

        // Do something with the tasks data, e.g., display it in your UI
      })
      .catch(error => {
        console.error(error);
        // Handle errors gracefully, e.g., display an error message to the user
      });

    // TODO: when a new user lands on this page after sign up, then automaticaly all the tasks must be updated on the user model ( like task name , exerciseDone , earnedMoney , isBanned , spamScore etc )
    // or we can also make a new model of TASKs that database collection will contain all the info of all the tasks. as soon as user signs up , all the tasks data gets updated in user data.

  }, [])

  // useEffect(() => {

  //   // TODO: fetch user model from database and look for "tasks" field , in the task field look for "exerciseDone" field , if true then user can do the actuall task and set the red button as "start".

  // }, [])
 



  return (
    <>
      {/* THIS IS MY USER DASHBOARD => TAKS LISTING UI */}
      <div className='bg-white flex items-start justify-between  px-5 py-4 task-box-shadow rounded-[14px]'>
        {/* div 1 => title , btns  */}
        <div className=' flex items-start flex-col justify-between gap-3'>
          <b className='text-[21px]'>Mark Offensive </b>
          <div className='flex items-center justify-center gap-4 text-[19px]'>
            <FaEye className='text-gray-600'></FaEye>
            <Link to="/companyA/exercise/TaskA"><FaDumbbell className='text-gray-600'></FaDumbbell></Link>
            <CiBookmarkCheck></CiBookmarkCheck>
            <VscFeedback></VscFeedback>

          </div>
          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1  text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
         Text Annotation
      </span>
          {/* only show this when user is qualified to do the task, that is after training and qualifying process */}
          {/* <Link to='/companyA/TaskA'><button className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded'>Start </button></Link> */}

          {
            tasksData[0]?.exerciseDone ? ( <Link to='/companyA/TaskA'><button className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded'>Start </button></Link>) : 
            ( <Link to='/companyA/exercise/TaskA'><button className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded'>Exercise </button></Link>)
          }
        </div>

        {/* div 2 => discription , tips   */}
        <div className='text-justify  lg:w-[70%] flex items-start justify-start flex-col gap-4'>
          <p>Judge text content based on its potential offensiveness. In this task, users are presented with queries or sentences, and their role is to determine whether the provided text contains offensive language or content.</p>
          <div className='flex items-start justify-center gap-8'>
            <p>Earn : <b>0.43 Rs/Task</b></p>
            <p>Task : <b>1.3k</b></p>
            <p>Time : <b>10 sec</b></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskListA


// task -> title , discription , available hits , money per hit , time per hit , hit preview btn ,  hit exercise btn.