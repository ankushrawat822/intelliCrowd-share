import { useState } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import UserDashboard from './user/UserDashboard'
import Header from './Clerk_auth/Header'


// company
import TaskA from './companyA/TaskA'
import Signup from './Components/Authentication/Signup'
import Login from './Components/Authentication/Login'
import ExerciseTaskA from './companyA/ExerciseTaskA'
import HomePage from './Home/HomePage'

// modified auth
import UserLogin from "./user/Login"
import UserSignup from "./user/Signup"
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import RedirectToHome from './Helper/RedirectToHome'



function App() {

  
  return (
    <>

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<HomePage/>} />

          
          <Route path='/user-dashboard' element={
          <>
           <SignedIn>
            <UserDashboard></UserDashboard>
           </SignedIn>


           <SignedOut>
             <RedirectToHome></RedirectToHome>
           </SignedOut>

        
          </>}  />


          <Route path='/companyA/TaskA' element={
          <>
           <SignedIn>
             <TaskA></TaskA>
           </SignedIn>


           <SignedOut>
             <RedirectToHome></RedirectToHome>
           </SignedOut>

        
          </>}  />



          <Route path='/companyA/exercise/TaskA' element={
          <>
           <SignedIn>
           <ExerciseTaskA></ExerciseTaskA>
           </SignedIn>


           <SignedOut>
             <RedirectToHome></RedirectToHome>
           </SignedOut>

        
          </>}  />

         {/* taskA routes frontend */}
          {/* <Route path='/companyA/TaskA' element={<><TaskA></TaskA></>}  /> */}
          {/* <Route path='/companyA/exercise/TaskA' element={<><ExerciseTaskA></ExerciseTaskA></>} /> */}

          {/* auth routes */}
          {/* <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} /> */}

          {/* modified auth */}
          {/* <Route path='/user-login' element={<> <UserLogin></UserLogin></>} />
          <Route path='/user-signup' element={<> <UserSignup></UserSignup></>} /> */}
         

         {/* test */}
         {/* <Route path="/test" element={<Header></Header>} ></Route> */}


        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App

// todo :
// 1> create user dashboard -> task list , total earn money , 
// 2) create company maintainance page ( admin panal ) -> ( updae : auth by unique secret task id and password to only get access of that particual task...)
// 3) fuctionality where if company post something (task) then it will show to all user dashboard, ( update : the company can't just post that , instead the company can only manage the task using admin paanl...)
// 4) task -> available hits , money per hit , time per hit , hit preview btn , hit training btn., ( question :- will there be a seperate url of preview , traning and actual task)
// qualify or screening process -> figure out about screening round ( update : maybe just add another file name of screening just like preview and tranig and if user pass the screening only then allow them to do actuall task or else they can only do preview and training )
// 4.1) trainingTaskA -> guidlines , exact as taskA but when click on submit btn then user can see the results that if they were correct or not...
// 4.2) previewTaskA -> guidlines , exact as taskA but when click on submit btn , data won't be updated 
// 4.3) taskA -> guidlines , task submit btn that will store the data and regular spam check 
// 5) when submit hit then user's money count inc according to that and data gets saved
// 6) spam score of each task. 

//--------------------------------------------------------------------------

// approach to list task :-
// I will code the individual task according to customer needs then copy paste the code the main website that can managed by admin of that task , that means i will also have to delevelp the admin panal of that task.

// approach to task creation :-
// for each company , I will create a folder of its name and inside that folder there will be training , preview , taskList Ui ( shown on userDashboard ) , task ui ( actual task ) files , admin panal to change something on the taskList Ui and also to check amount of money burnt and amount of data collected.

//--------------------------------------------------------------------------

// my nameing conventions :
// companyA -> folder of the particular company that includes files of tasks...
// taskListA -> just the listing of task , shown on user dashboard
// taskA (MAIN) -> actual task ui with submit btn that actually store the data .
// trainingTaskA -> only traing of the user about the task
// previewTaskaA -> only preview of the user about the task
// adminPanelTaskA -> admin panel of taskA , where companyA can modify availability of the task 

//-----------------------------------------------------------------------------
// components to add in main task page : 
// 10 min count down timer , 