const router = require('express').Router()
const {isUser} = require('../middleware/middleware')

router.use(isUser)

router.get('/userTest',(req,res)=>{
    console.log(req.session)
    res.status(200).end()
})

module.exports = router