const express = require('express')
const db = require('../db')

const router = express.Router()

router
    .get('/',(req, res)=>{
        res.json(db.articles)
    })
    .post('/',(req, res)=>{
        db.articles.push(req.body)
        console.log(req)
        res.json(req.body)
    })


   

module.exports = router