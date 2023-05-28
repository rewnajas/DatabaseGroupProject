const router = require('express').Router()
const { isUser } = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)


router.get('/borrow', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM borrow WHERE militaryID = ?',[
            req.session.passport.user
        ])
        res.send(result)
    } catch (err) {
        console.log(err)
    }

})

router.get('/military', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM MILITARY WHERE militaryID = ?',[
            req.session.passport.user
        ])
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})


router.get('/WEAPON', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM WEAPON')
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})



module.exports = router