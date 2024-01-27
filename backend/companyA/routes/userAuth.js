const express = require("express")
const router = express.Router()

const {Login , Signup, getCurrentUserByEmail, updateTaskExerciseDone} = require('../controllers/userController')

// patch "exerciseDone" field
router.patch("/task-update-exercise-done" , updateTaskExerciseDone)

// patch "earn "

// get current user by email
router.get("/me" , getCurrentUserByEmail)

router.post ("/signup", Signup)
router.post ("/login", Login)


module.exports = router