const router = require('express').Router()
const {isUser} = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)

router.get('/userTest',(req,res)=>{
    console.log(req.session)
    res.status(200).end()
})

router.post('/search',async(req,res)=>{
    const name = req.body.name
    console.log(name)
    if(name) {
        const [rows] = await db.query("SELECT * FROM weapons WHERE weapon_name LIKE ? ",[name + '%'])
        console.log(rows)
        res.send(rows).end()
    }
    res.end()
   
})

module.exports = router