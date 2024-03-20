import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'
import "./taskA.css"
import { spamArr } from './SpamScoreData'


let recentSubmissionTimes = [];  // Track the last few submission timestamps
const maxRecentSubmissions = 5;  // Adjust as needed
const timeToCompleteTask = "12 seconds"
const thresholdTimeForSpam = 14000;


const taskName = "mark offensive"

const TaskA = () => {


  const { user } = useUser();

  const email = user.primaryEmailAddress.emailAddress;


  // task variable that is randomly fetched
  const [randomTaskObj, setRandomTaskObj] = useState({})


  // TaskA is to annotate sentiments of user comments of twitter 
  const [querry, setQuerry] = useState("loading...")


  // USER INPUTS 
  const [userInput, setUserInput] = useState({})
  // user skipped query
  const [skippedQuery, setSkipQuery] = useState(false)


  // spam task
  const [spamFlag, setSpamFlag] = useState(false)
  const [spamTask, setSpamTask] = useState({})
  // spamScore to must be calculated on server side in user model, 



  //disable submit btn if no annotation marked 
  const [disabeSubmit, setDisableSubmit] = useState(true)


  const [spamScore, setSpamScore] = useState(0)
 

   const [isUserBanned , setIsUserBanned] = useState(false)

  // useEffect for spamScore
  useEffect(() => {

    const fetchSpamScore = async () => {

      
      try {
        axios.post('http://localhost:8080/api/me', { email }) // Send a POST request with email in the body
          .then(response => {
            const user = response.data; // Access the user data from the response
            const currentSpamScore = user.tasks.find(task => task.name === taskName).spamScore;
            
            // is user banned?
             setIsUserBanned(user.tasks.find(task => task.name === taskName).isBanned)

            // console.log(tasks);
            setSpamScore(currentSpamScore)
            // Do something with the tasks data, e.g., display it in your UI
          })

         
     

      } catch (error) {
        console.error(error);
      }

    }


    fetchSpamScore()


   

  }, [disabeSubmit])





  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      // setError(null);

      try {
        const response = await axios.get('http://localhost:8080/api/random');
        setQuerry(response.data[0].tweet);
        setRandomTaskObj(response.data[0])
      } catch (error) {
        setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, [])


  // function to fetch data on click on SUBMIT btn also manageing to show spam querys to user to check spam starts
  const fetchData = async () => {
    // setIsLoading(true);
    // setError(null);


    try {
      const response = await axios.get('http://localhost:8080/api/random');

      // condition to show spam tweet 
      if (Math.random() < 0.26) {
        const randomSpam = spamArr[Math.floor(Math.random() * spamArr.length)]
        setQuerry(randomSpam.tweet)
        setSpamFlag(true)
        setSpamTask({
          "answer": randomSpam.answer,
          "tweet": randomSpam.tweet,
          "id": randomSpam.id
        })

      } else {
        setQuerry(response.data[0].tweet);
        setRandomTaskObj(response.data[0])
      }

      //console.log(querry)
    } catch (error) {
      setError(error);
    } finally {
      // setIsLoading(false);
    }
  };
  // function to fetch data on click on SUBMIT btn also manageing to show spam querys to user to check spam ends


  // annotaton function
  const annotation = (e) => {

    setDisableSubmit(false)

    if (e == "skip") {
      setUserInput({
        "tweet": querry,
        "isAnnotate": false,
        "isOffensive": false
      })
      setSkipQuery(true)

    } else {
      setUserInput({
        "tweet": querry,
        "isAnnotate": true,
        "isOffensive": e
      })
      setSkipQuery(false)
    }

  }

  // function to check if user is speed spamming or not.  starts
  const checkSpeedSpam = () => {
    recentSubmissionTimes.push(Date.now())

    recentSubmissionTimes = recentSubmissionTimes.slice(-maxRecentSubmissions);

    const timeSinceEarliestSubmission = Date.now() - recentSubmissionTimes[0];
    console.log(recentSubmissionTimes)
    if (timeSinceEarliestSubmission < thresholdTimeForSpam) {  // Adjust threshold as needed
      // Increase spam score or display warning
      console.log(timeSinceEarliestSubmission)

      if (recentSubmissionTimes.length > 3) {
        console.log("Warning: Frequent task submissions detected.");
        
         // updating earned amount
         axios.patch('http://localhost:8080/api-ban/submit-spam-user', { email, taskName })
         .then(response => {
           console.log('user banned successfully');
           // Handle successful response, e.g., update UI to reflect the increased earn money
         })
         .catch(error => {
           console.error(error);
           // Handle errors, e.g., display an error message to the user
         });
 





      } else {
        console.log("no warning , keep going")
      }

    } else {
      // Submit the task as usual
      // ...
      console.log(timeSinceEarliestSubmission)
      console.log("no warning , keep going")
    }
  }
  // function to check if user is speed spamming or not.  ends


  // function to uncheck radio btn
  const handleUnCheckRadioBtn = () => {
    let radioArr = document.querySelectorAll(".radiobtn")
    radioArr.forEach(value => value.checked = false)
  }


  // function to submit tasks by the user and also checking user spam and also manageing skip querry starts
  const submitTask = async () => {


    if (spamFlag) {
      if (skippedQuery) {
        setSpamFlag(false)
        console.log("user skipped spam query , do nothing ")
      } else {
        setSpamFlag(false)
        const currentSpam = spamArr.find(task => task.id === spamTask.id);
        console.log(currentSpam.answer + "  and  " + userInput.isOffensive)
        if (userInput.isOffensive == currentSpam.answer) {
          console.log("the user is not spamming")

          // if (spamScore >= 10) {
          //   setSpamScore(value => value - 9.3)
          // } else {
          //   setSpamScore(0)
          // }

          // code to reduce spamScore as user is not spamming.

          axios.patch('http://localhost:8080/api-spam/reduce', { email, taskName })
          .then(response => {
            console.log('Spam score reduced successfully!');
            // Handle successful response, e.g., update UI
          })
          .catch(error => {
            console.error(error);
            // Handle errors, e.g., display an error message
          });




          console.log("spam score : " + spamScore)

        } else {
          console.log("the user is spamming")
          // if (spamScore <= 90) {
          //   setSpamScore(value => value + 9.3)
          // } else {
          //   setSpamScore(100)
          // }
          // console.log("spam score : " + spamScore)


          axios.patch('http://localhost:8080/api-spam/increase', { email, taskName })
            .then(response => {
              console.log('Spam score reduced successfully!');
              // Handle successful response, e.g., update UI
            })
            .catch(error => {
              console.error(error);
              // Handle errors, e.g., display an error message
            });
        }
      }



    } else {

      if (!skippedQuery) {

        // submiting the annotated data to result collection 
        try {
          const response = await axios.post('http://localhost:8080/api/submit', userInput);
          //console.log(response.data);
          // Handle success (e.g., clear form, show success message)
        } catch (err) {
          console.error(err);
          // Handle error
        }

        // updating the fetchTask collection ( isAnnotate : true )
        try {
          const response = await axios.patch(`http://localhost:8080/api/task/${randomTaskObj._id}`, { isAnnotate: userInput.isAnnotate })
            .then(response => {
              console.log('Task updated:', response.data);
              // Handle the updated task as needed
            })

        } catch (err) {
          console.error("Error updating task", err);
          // Handle error
        }



        // updating earned amount
        axios.patch('http://localhost:8080/api-earn/earn', { email, taskName })
        .then(response => {
          console.log('Earn money increased successfully!');
          // Handle successful response, e.g., update UI to reflect the increased earn money
        })
        .catch(error => {
          console.error(error);
          // Handle errors, e.g., display an error message to the user
        });


      } else {

        console.log("user skipped normal query , do nothing")

      }


    }



    // uncheck radio btn on state change...
    handleUnCheckRadioBtn()


    console.log(userInput)


    if(isUserBanned){
      alert("you are banned due to spamming submit button")
   }


  }
  // function to submit tasks by the user and also checking user spam and also manageing skip querry ends




  return (
    <>
      {/* main component */}
      <div className='mx-4'>
        {/* top page nav starts */}
        <div className=' my-3 py-2 bg-red-500 rounded-[8px] flex items-center justify-between px-3'>
          {/* title of task */}
          <p className='text-white font-semibold text-[20px]'>Title : Mark Offensive comments </p>

          {/*  current task time , overall time , exit , money , total hits done */}
          <div className='flex items-center justify-center gap-x-5 text-[white]'>
            {/* testing , to be deleted */}
            <p className='font-bold '>spam score : {spamScore === 0 ? "0" : spamScore}%</p>
            <p>10:00</p>
            <p>Guidelines</p>
            <Link to="/user-dashboard"><button>Exit</button></Link>
          </div>
        </div>
        {/* top page nav ends */}



        {/* annotation and iframe google div */}
        <div className='flex items-start justify-between gap-3 '>

          {/* annotation section  and instructins starts */}

          <div className=' w-[50%] '>

            <div className='  grey-bg py-3 px-3 rounded-[4px] '>
              <p className='font-semibold text-[18px] mb-3'>The query is given below : </p>
              <p className='font-bold text-[20px] '> {querry} </p>

              {/* submit btns */}
              <div>

                {/* radio btns starts */}
                <fieldset className='mt-7'>

                  <p className='text-[18px]'>Is the above text Offensive?</p>

                  <div className="mt-2 flex items-center gap-9 justify-start ">

                    <div className="flex items-center gap-x-3 ">
                      <input
                        id="yes"
                        name="annotation"
                        type="radio"
                        value={true}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 radiobtn"
                        onChange={e => annotation(e.target.value)}
                      />
                      <label htmlFor="yes" className="block  font-medium leading-6 text-gray-900 text-[22px]">
                        Yes
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3 ">
                      <input
                        id="no"
                        name="annotation"
                        type="radio"
                        value={false}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 radiobtn"
                        onChange={e => annotation(e.target.value)}
                      />
                      <label htmlFor="no" className="block font-medium leading-6 text-gray-900 text-[22px] first-letter:" >
                        No
                      </label>
                    </div>


                    <div className="flex items-center gap-x-3 ">
                      <input
                        id="skip"
                        name="annotation"
                        type="radio"
                        value="skip"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 radiobtn"
                        onChange={e => annotation(e.target.value)}
                      />
                      <label htmlFor="skip" className="block font-medium leading-6 text-gray-900 text-[22px] first-letter:" >
                        Skip
                      </label>
                    </div>


                  </div>
                </fieldset>
                {/* radio btns ends */}
              </div>
              {/* annotation and iframe google div */}

              {/* submit btn */}
              <div>
                <button
                  type="button"
                  className="mt-5 text-[21px] inline-flex items-center rounded-md bg-red-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={() => { fetchData(); submitTask(); checkSpeedSpam(); setDisableSubmit(true) }}
                  disabled={disabeSubmit}
                >

                  Submit
                </button>
              </div>


            </div>

            {/* instruction div */}
            <div className='mt-2 px-3 py-3 rounded-[4px] grey-bg '>
              <p className='font-semibold text-[18px]'>Instructions : </p>
              <p>your job is to judge the sentiments of query. </p>
              <ul className='list-disc list-inside'>
                <li>Mark 'Yes' if the query is offensive.</li>
                <li>Mark 'No' if the query is NOT offensive.</li>
                <li>Mark 'Skip' if you are unsure.</li>
                <li>Download and read the Guidelines carefully before doing tasks.</li>
              </ul>

              <p className='font-semibold'>For example : </p>
              <p> <span className='font-semibold'> query : </span>  "#AnnCoulter still calling #Obama a 'community organizer' re: #Syria. Well, she is still #cunt as well. So what?"</p>
              <p><span className='font-semibold'> answer : </span> "Yes" , because the query contains hate speech against a person.</p>
            </div>

          </div>





          {/* iframe div */}
          <div className='w-[50%] grey-bg flex flex-col items-start gap-1 '>
            <p className='px-3 '>In case you got confused , search below</p>
            <iframe src="https://www.bing.com/?cc=in" className='w-full h-[500px]' frameborder="0" title='google-iframe'></iframe>
          </div>

        </div>


      </div>




  {/* div to show only if user is banned  */}
   
    {
      isUserBanned && 
      <div className=' absolute top-0 w-screen h-screen isBannedUserDivBg flex items-center justify-center'>
        <div className='text-center w-[300px] bg-white rounded-[20px] flex justify-center flex-col items-center h-[300px] px-6'>
          <p>You can not perform this task anymore as you are banned becaue of spamming submit button..</p>

          <Link to="/user-dashboard">
          <button
                  type="button"
                  className="mt-5 text-[21px] inline-flex items-center rounded-md bg-red-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >

                  Go Back
                </button>
          </Link>
          
        </div>
        {console.log("is user banned : " , isUserBanned)}
      </div>
      
    }

    </>
  )
}

export default TaskA