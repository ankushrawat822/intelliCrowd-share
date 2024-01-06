const express = require("express")
const app = express()

const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 8080


// importing routes
const getAllItems = require("../backend/companyA/routes/fetchTask")
const getRandomTask = require("../backend/companyA/routes/fetchTask")

const getAllResultItems = require("../backend/companyA/routes/fetchTask")
const submitTask = require("../backend/companyA/routes/fetchTask")
const modifyIsAnnotate = require("../backend/companyA/routes/fetchTask")


// middelwares
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())


// mounting routes
// /all
app.use("/api" , getAllItems)
// /random
app.use("/api" , getRandomTask)
// / all result
app.use("/api" , getAllResultItems)
// /random
app.use("/api" , submitTask)
// modify isAnnotate field
app.use("/api" , modifyIsAnnotate)

//


mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            app.listen(PORT , ()=>{
                console.log(`server is running on port ${PORT} , connected to ${process.env.MONGO_URL}`)
            })
        }).catch(err=> console.log(err))
