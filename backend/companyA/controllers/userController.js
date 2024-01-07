const Users = require('../models/Users');

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


  const isBanned = false;
  //create a new user
  const newUser = new Users({
    email: email,
    password: password,
    fullname: fullname,
    phoneNo: phoneNo,
    isBanned: isBanned,
    age: age,
    region: region
  });

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
     if (User.isBanned){
        return res.status(200).json({error: "You are banned !"});
     }

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