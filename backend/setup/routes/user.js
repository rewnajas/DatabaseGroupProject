const router = require('express').Router()
const { isUser } = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)

router.get('/ARMORY', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM ARMORY')
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})

router.get('/borrow', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM borrow')
        res.send(result)
    } catch (err) {
        console.log(err)
    }

})

router.get('/guard', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM guard')
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})

router.get('/military', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM MILITARY')
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})

router.get('/unit', async(req, res) =>{
    try {
        const [result] = await db.query('SELECT * FROM unit')
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

router.put('/borrow/:id', async (req, res) => {
    const requestId = req.params.id;
    const borrowStatus = req.body.borrowStatus;

    try {
        const [result] = await db.query(`UPDATE borrow set borrowStatus = ? 
        WHERE borrowID = ?`, [
            borrowStatus, requestId
        ])
        res.status(200).end()
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
    res.sendStatus(200);
});

module.exports = router