const express = require("express")
const router = express.Router()

const {createDefaultTask} = require('../controllers/tasksController')


router.post("/task-create", createDefaultTask)



module.exports = router