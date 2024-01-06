let recentSubmissionTimes = [];  // Track the last few submission timestamps
const maxRecentSubmissions = 5;  // Adjust as needed
const timeToCompleteTask = "12 seconds"
const thresholdTimeForSpam = 5000;
function submitTask() {
  recentSubmissionTimes.push(Date.now());
  recentSubmissionTimes = recentSubmissionTimes.slice(-maxRecentSubmissions);
  
  const timeSinceEarliestSubmission = Date.now() - recentSubmissionTimes[0];
  console.log(recentSubmissionTimes)
  if (timeSinceEarliestSubmission < thresholdTimeForSpam ) {  // Adjust threshold as needed
    // Increase spam score or display warning
    console.log(timeSinceEarliestSubmission)

    if(recentSubmissionTimes.length > 3){
       console.log("Warning: Frequent task submissions detected.");
    }else{
     console.log("no warning , keep going")
    }
   
  } else {
    // Submit the task as usual
    // ...
     console.log(timeSinceEarliestSubmission)
    console.log("no warning , keep going")
  }
}


async function fun(){
  submitTask()
  await new Promise(resolve => setTimeout(resolve, 1000));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 12000));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1500));
  submitTask()
  await new Promise(resolve => setTimeout(resolve, 3500));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 5100));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 4000));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1500));
  submitTask()
  await new Promise(resolve => setTimeout(resolve, 7500));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1500));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1000));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 2000));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1000));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1000));
  submitTask()
  await new Promise(resolve => setTimeout(resolve, 6900));
  submitTask()
   await new Promise(resolve => setTimeout(resolve, 1000));
  submitTask()
     await new Promise(resolve => setTimeout(resolve, 1000));
  submitTask()
  console.log("finished")
}

fun()