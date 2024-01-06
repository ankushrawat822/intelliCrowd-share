import { useState } from 'react'
import UserDashboard from './UserDashboard'
import Header from './Header'

function App() {


  return (
    <>
      <div>
       <Header></Header>
       <UserDashboard></UserDashboard>
          </div>
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
// taskA -> actual task ui with submit btn that actually store the data .
// trainingTaskA -> only traing of the user about the task
// previewTaskaA -> only preview of the user about the task
// adminPanelTaskA -> admin panel of taskA , where companyA can modify availability of the task 