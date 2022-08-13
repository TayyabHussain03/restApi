const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/students-api",).then(() => {
    console.log("connection is successfull")
}).catch((error) => {
    console.log(`No connection due to ${error}`)
})

