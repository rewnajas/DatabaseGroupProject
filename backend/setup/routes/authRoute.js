const router = require('express').Router()
const { checkAuth, checkRole } = require('../middleware/middleware')
const userRoute = require('./user')
const adminRoute = require('./admin')
const guardRoute = require('./guard')
const globalRoute = require('./globalRoute')
const db = require('../database-config')
const session = require('express-session')
require('dotenv').config()

router.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

router.use(checkAuth)

router.get('/checkauth', (req, res) => {
    return res.status(200).end()
})

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    });
});


router.get('/isRegular', checkRole, (req, res) => {
    if (req.session.role === 'regular') {
        return res.status(200).end()
    }
    return res.status(401).end()
})

router.get('/isAdmin', checkRole, (req, res) => {
    if (req.session.role === 'admin') {
        return res.status(200).end()
    }
    return res.status(401).end()
})

router.get('/isGuard', checkRole, (req, res) => {
    if (req.session.role === 'guard') {
        return res.status(200).end()
    }
    return res.status(401).end()
})

router.get('/authorized', async (req, res) => {
    const [rows] = await db.query('SELECT militaryType FROM MILITARY WHERE militaryID=?', [req.session.passport.user])
    if (rows.length > 0) {
        console.log(rows[0].militaryType)
        return res.status(200).send({ role: rows[0].militaryType })
    }
    return res.status(500).end()
})

router.get('/getRole', async (req, res) => {
    const [rows] = await db.query(`SELECT Fname,Lname,prefix,militaryType FROM MILITARY 
    WHERE militaryID=?`, [
        req.session.passport.user
    ])
    
    if (rows.length > 0) {
        req.session.role = rows[0].militaryType
        return res.send({ role: rows[0].militaryType }).end()
    }
    return res.status(500).end()
})

router.use('/user', userRoute)
router.use('/admin', adminRoute)
router.use('/guard', guardRoute)
router.use(globalRoute)

module.exports = router