import React from 'react'
import TaskListA from './companyA/TaskListA'

const UserDashboard = () => {
  return (
    <div className='flex items-center justify-center w-[100vw] mt-12'>
        {/* task list div */}
        <div className=' lg:w-[45vw] md:w-[80vw] w-[90vw]'>
            {/*  map of all tasks ( for this testing there will be only one ) */}
             <TaskListA></TaskListA>
        </div>
    </div>
  )
}

export default UserDashboard

// components
// 1) 