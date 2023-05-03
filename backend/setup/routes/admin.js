const router = require('express').Router()
const {isAdmin} = require('../middleware/middleware')

router.use(isAdmin)

router.get('/adminTest',(req,res)=>{
    
    res.status(200).end()
})

module.exports = router