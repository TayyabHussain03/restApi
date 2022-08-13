const express = require("express")
const studentsRoutes = require("./routers/routes")
require('./db/connection')

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())
app.use(studentsRoutes)


app.listen(port, () => {
    console.log("server started")
})