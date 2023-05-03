const router = require('express').Router()
const {isGuard} = require('../middleware/middleware')

router.use(isGuard)

router.get('/guardTest',(req,res)=>{
    res.status(200).end()
})

module.exports = router