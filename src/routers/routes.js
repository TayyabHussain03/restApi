const express = require("express")
const router = new express.Router()
const Students = require("../models/students")

router.get("/", (req, res) => {
    res.send("hello from the my side")
})
//Using Promise
// router.post("/students", (req, res) => {
//     const studentsData = new Students(req.body)
//     studentsData.save().then(() => {
//         res.status(200).send(studentsData)
//     }).catch((error) => {
//         res.status(400).send(error)
//     })
// })

//Using Async Await
router.post("/students", async (req, res) => {
    try {
        const studentsData = new Students(req.body)
        const userStudent = await studentsData.save()
        res.status(200).send(userStudent)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.get("/students", async (req, res) => {
    try {
        const studentsData = await Students.find()
        res.send(studentsData)
    } catch (e) {
        res.send(e)
    }
})
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const studentsData = await Students.findById(_id)
        if (!studentsData) {
            res.status(404).send()
        }
        else {
            res.send(studentsData)
        }
    } catch (e) {
        res.send(e)
    }
})
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const studentsData = await Students.findByIdAndUpdate(_id, req.body)
        if (!studentsData) {
            res.status(404).send()
        }
        else {
            res.send(studentsData)
        }
    } catch (e) {
        res.send(e)
    }
})

module.exports = router