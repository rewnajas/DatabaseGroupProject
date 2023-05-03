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
        
        res.send(rows).end()
    }
    res.end()
})

router.patch('/increment',async(req,res)=>{
    const name = req.body.name
    db.query('UPDATE weaponInfo SET num_available = num_available + 1 WHERE weapon_name = ?',[name])
    .then(()=>res.end())
})

module.exports = router