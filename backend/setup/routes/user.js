const router = require('express').Router()
const {isUser} = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)

router.get('/userTest',(req,res)=>{
    res.status(200).end()
})

router.post('/searchRegx',async(req,res)=>{
    const name = req.body.name
    if(name) {
        const [rows] = await db.query("SELECT * FROM weapons WHERE weapon_name LIKE ? ",[name + '%'])
        res.send(rows).end()
    }
    res.end()
})

router.get('/search:name',async(req,res)=>{
    const name = req.params.name
    const [rows] = await db.query('SELECT * FROM weapons WHERE weapon_name =?',[name])

    res.send(rows).end()
    
})

module.exports = router