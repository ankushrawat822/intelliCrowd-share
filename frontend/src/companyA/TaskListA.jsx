import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";

const TaskListA = () => {
  return (
     <>
     {/* THIS IS MY USER DASHBOARD => TAKS LISTING UI */}
        <div className='flex items-center justify-between  px-5 py-4 task-box-shadow rounded-[14px]'>
            {/* div 1 => title , btns  */}
            <div className=' flex items-start flex-col justify-between gap-3'>
                <b className='text-[21px]'>Title : some title </b>
                <div className='flex items-center justify-center gap-4 text-[19px]'>
                 <FaEye className='text-gray-600'></FaEye>
                 <FaUserGraduate className='text-gray-600'></FaUserGraduate>
                 <CiBookmarkCheck></CiBookmarkCheck>
                 <VscFeedback></VscFeedback>
                
                </div>
                {/* only show this when user is qualified to do the task, that is after training and qualifying process */}
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded'>Start</button>
            </div>

            {/* div 2 => discription , tips   */}
            <div className='text-justify  lg:w-[70%] flex items-start justify-start flex-col gap-4'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nulla suscipit harum quis? Quasi dignissimos, eos iste in quas provident unde eum qui soluta earum odio totam</p>
                <div className='flex items-start justify-center gap-8'>
                    <p>Earn : <b>0.43 Rs/Task</b></p>
                    <p>Task : <b>1.3k</b></p>
                    <p>Time : <b>20 sec</b></p>
                </div>
            </div>
        </div>
     </>
  )
}

export default TaskListA


// task -> title , discription , available hits , money per hit , time per hit , hit preview btn ,  hit training btn.