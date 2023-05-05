const router = require('express').Router()
const db = require('../database-config')
const {isGuard} = require('../middleware/middleware')

router.use(isGuard)

router.get('/guardTest',(req,res)=>{
    res.status(200).end()
})

router.get('/checkArmory',async(req,res)=>{
    const [rows] = await db.query('SELECT * FROM WEAPON')
    res.send(rows).end()
})

module.exports = router