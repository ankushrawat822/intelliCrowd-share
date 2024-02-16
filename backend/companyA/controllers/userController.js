const Users = require('../models/Users');
const Tasks = require('../models/Tasks'); // Import the DefaultTask model

exports.getUsers= (req , res)=>{

  //mongodb method to fetch all data
  Users.find().then(result=>{
    res.status(200).json({
      message:"users data fetched successfully",
      req_data : result
    })
  }).catch(error=>{
    res.status(500).json({
      message:"error in database",
      error: error
    })
  })

 
}

// get current user by email
exports.getCurrentUserByEmail = async (req, res) => {
  try {
    
    const email = req.body.email; // Assuming email is in the request body
    const user = await Users.findOne({ email });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user' });
  }
};


exports.Signup= async (req,res)=>{
  const {
    email,
    password,
    fullname,
    phoneNo,
    age,
    region
  } = req.body

  try{

  
  const existingUser = await Users.findOne({email: email});

  if(existingUser){
    return res.status(400).json({error: "Email already registered"})
  }


 
  //create a new user
  const newUser = new Users({
    email: email,
    password: password,
    fullname: fullname,
    phoneNo: phoneNo,
    age: age,
    tasks : [],
    region: region
  });

  // Retrieve default tasks and assign to user
  const defaultTasks = await Tasks.find();
  newUser.tasks = defaultTasks;

  const savedUser = await newUser.save();

  res.status(200).json({message:"user registered successfully", user:savedUser});
}catch(err){
  res.status(500).json({message:"error in resistering user",error:err});
}

}

exports.Login = async (req , res)=>{
  const {
    email,
    password
  } = req.body;

  try{
     //check if the user exist
     const User = await Users.findOne({ email: email});
     if(!User){
      return res.status(400).json({error: "user is not registered"});
     }

     //check if the password is correct
    //  if (User.isBanned){
    //     return res.status(200).json({error: "You are banned !"});
    //  }

     if (User.password !== password){
      return res.status(400).json({error: "password is incorrect"});
     }

     res.status(200).json({
      message:"login successful",
      user: User
     })
  }catch(err){
        return res.status(500).json({error:err});
  }
}




// function to update "exerciseDone" filed in tasks array of a perticular task
exports.updateTaskExerciseDone = async (req, res) => {
  try {
   
    const { email, taskName } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const taskIndex = user.tasks.findIndex(task => task.name === taskName);

    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }

    user.tasks[taskIndex].exerciseDone = true;
    await user.save();

    res.json({ message: 'Task updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating task' });
  }
};


// earn money on submiting TaskA
exports.increaseTaskEarnMoney = async (req, res) => {
  try {
    const { email, taskName } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const taskIndex = user.tasks.findIndex(task => task.name === taskName);

    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Determine the amount to increase earnMoney (example: 5)
   
    const amountToIncrease = 0.43;

   

    const currentUserEarnedMoney = user.tasks[taskIndex].earnedMoney

    const updatedUserEarnedMoney = currentUserEarnedMoney + amountToIncrease

    const formattedValue = parseFloat(updatedUserEarnedMoney.toFixed(2));

    user.tasks[taskIndex].earnedMoney = formattedValue;
    await user.save();

    res.json({ message: 'Earn money increased successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error increasing earn money' });
  }
};