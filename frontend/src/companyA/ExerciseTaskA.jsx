import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'
import "./taskA.css"
import { exerciseTaskADataArray } from './ExerciseTaskData'


// let recentSubmissionTimes = [];  // Track the last few submission timestamps
// const maxRecentSubmissions = 5;  // Adjust as needed
// const timeToCompleteTask = "12 seconds"
// const thresholdTimeForSpam = 8000;


const ExerciseTaskA = () => {

    const { user } = useUser();

    const email = user.primaryEmailAddress.emailAddress

    // NAME OF TASKS
    const taskName = "mark offensive"

    // index 
    const [index, setIndex] = useState(0)

    // show and hide result div after submit btn click
    const [showResultDiv, setShowResultDiv] = useState(false)

    // show this when exercise finished
    const [isExerciseFinished, setIsExerciseFinished] = useState(false)


    // TaskA is to annotate sentiments of user comments of twitter 
    const [querry, setQuerry] = useState("loading...")

    // storing currnet query info
    const [tweetObj, setTweetObj] = useState({})


    // USER INPUTS 
    const [userInput, setUserInput] = useState({})
    // user skipped query
    const [skippedQuery, setSkipQuery] = useState(false)


    // spam task
    // const [spamFlag, setSpamFlag] = useState(false)
    //const [spamTask, setSpamTask] = useState({})
    // spamScore to must be calculated on server side in user model, 



    //disable submit btn if no annotation marked 
    const [disabeSubmit, setDisableSubmit] = useState(true)




    useEffect(() => {

        const randomSpam = exerciseTaskADataArray[index]
        setQuerry(randomSpam.tweet)
        setTweetObj({
            "answer": randomSpam.answer,
            "reason": randomSpam.reason
        })
        // setSpamFlag(true)

    }, [index])


    // function to fetch data on click on SUBMIT btn also manageing to show spam querys to user to check spam starts
    const fetchData = async () => {

        if (index < exerciseTaskADataArray.length - 1) {
            setIndex(value => value + 1)
        } else {
            setIsExerciseFinished(true)
        }

        //     if(index < exerciseTaskADataArray.length){
        //         setIndex(value=> value++)
        //         console.log(index)
        //         const randomSpam = exerciseTaskADataArray[index]
        //         setQuerry(randomSpam.tweet)
        //         setTweetObj({ "answer" : randomSpam.answer , 
        //         "reason" : randomSpam.reason
        // })
        //  console.log("next " + index)
        //     }else{

        //         setIsExerciseFinished(true)

        //     }


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
    // const checkSpeedSpam = () => {
    //     recentSubmissionTimes.push(Date.now())

    //     recentSubmissionTimes = recentSubmissionTimes.slice(-maxRecentSubmissions);

    //     const timeSinceEarliestSubmission = Date.now() - recentSubmissionTimes[0];
    //     console.log(recentSubmissionTimes)
    //     if (timeSinceEarliestSubmission < thresholdTimeForSpam) {  // Adjust threshold as needed
    //         // Increase spam score or display warning
    //         console.log(timeSinceEarliestSubmission)

    //         if (recentSubmissionTimes.length > 3) {
    //             console.log("Warning: Frequent task submissions detected.");
    //             alert("Spam Warning")
    //         } else {
    //             console.log("no warning , keep going")
    //         }

    //     } else {
    //         // Submit the task as usual
    //         // ...
    //         console.log(timeSinceEarliestSubmission)
    //         console.log("no warning , keep going")
    //     }
    // }
    // function to check if user is speed spamming or not.  ends


    // function to uncheck radio btn
    const handleUnCheckRadioBtn = () => {
        let radioArr = document.querySelectorAll(".radiobtn")
        radioArr.forEach(value => value.checked = false)
    }


    // user clicked on submit btn
    const useSubmitedExerciseAns = () => {
        setShowResultDiv(true)
    }


    // function to submit tasks by the user and also checking user spam and also manageing skip querry starts
    const submitTask = async () => {

        setShowResultDiv(false)

        // uncheck radio btn on state change...
        handleUnCheckRadioBtn()


        console.log(userInput)

    }
    // function to submit tasks by the user and also checking user spam and also manageing skip querry ends



    const exerciseCompletes = () => {
        axios.patch('http://localhost:8080/api/task-update-exercise-done', { email, taskName })
            .then(response => {
                console.log('Task updated successfully!');
                // Handle the updated tasks data if needed
            })
            .catch(error => {
                console.error(error);
                // Handle errors gracefully, e.g., display an error message to the user
            });
    }



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
                        <p className='font-bold '>status : Exercise</p>
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
                                    onClick={() => { useSubmitedExerciseAns(); }}
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




            {/*  result box start  */}

            {showResultDiv && <div className='absolute top-0  exerciseTaskA-result-box-bg w-full h-full flex    items-center justify-center'>


                <div className='bg-white rounded-[8px]  px-5 py-5 flex items-center justify-center flex-col'>

                    {/* comparision of user's answer and actual answer */}
                    <div>
                        <p>Your Answer : {userInput.isOffensive}</p>
                        <p className='my-2'>Correct Answer : {tweetObj.answer} </p>

                        <p>Reason : {tweetObj.reason}</p>

                    </div>

                    <button
                        type="button"
                        className="mt-5 text-[18px] inline-flex items-center rounded-md bg-red-500 px-2 py-1 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        onClick={() => { fetchData(); submitTask(); setDisableSubmit(true) }}
                        disabled={disabeSubmit}
                    >

                        Continue
                    </button>


                </div>

            </div>}


            {/* result box ends */}




            {/* exercise completed div starts */}



            {isExerciseFinished && <div className='absolute top-0  exerciseTaskA-result-box-bg w-full h-full flex    items-center justify-center'>


                <div className='bg-white rounded-[8px]  px-5 py-5 flex items-center justify-center flex-col'>

                    {/* comparision of user's answer and actual answer */}
                    <div>
                        <p>Congrats , you have completed the exercise successfully </p>
                        <p>now you can start doing the actual tasks and earn money</p>
                        <p>Go back to dashboard and reload the page.</p>

                    </div>

                    <Link to="/user-dashboard"><button
                        type="button"
                        className="mt-5 z-40 text-[18px] inline-flex items-center rounded-md bg-red-500 px-2 py-1 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        // onClick={() => { fetchData(); submitTask(); setDisableSubmit(true) }}
                        // disabled={disabeSubmit}
                        onClick={exerciseCompletes}
                    >

                        Continue to dashboard
                    </button> </Link>


                </div>

            </div>}



            {/* exercise completed div ends */}
        </>
    )
}

export default ExerciseTaskA