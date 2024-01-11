import React , {useEffect} from 'react'

import TaskListA from '../companyA/TaskListA'

const UserDashboard = () => {

  useEffect(() => {
    
    // TODO: when a new user lands on this page after sign up, then automaticaly all the tasks must be updated on the user model ( like task name , exerciseDone , earnedMoney , isBanned , spamScore etc )
    // or we can also make a new model of TASKs that database collection will contain all the info of all the tasks. as soon as user signs up , all the tasks data gets updated in user data.

  }, [])
  
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