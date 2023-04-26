const router = require('express').Router()
const checkAuth = require('../middleware/middleware')
const db = require('../database-config')
const session = require('express-session')
require('dotenv').config()

router.use(session({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : false
}))

router.use(checkAuth)

router.get('/checkauth',(req,res)=>{
    return res.status(200).end()
})

router.get('/isUser',(req,res)=>{
    if(req.session.role === 'user') {
        return res.status(200).end()
    }
    return res.status(401).end()
})

router.get('/isAdmin',(req,res)=>{
    if(req.session.role === 'admin') {
        return res.status(200).end()
    }
    return res.status(401).end()
})

router.get('/isGuard',(req,res)=>{
    if(req.session.role === 'guard') {
        return res.status(200).end()
    }
    return res.status(401).end()
})

router.get('/authorized',async(req,res)=>{
    const [rows] = await db.query('SELECT role FROM profile WHERE username=?',[req.session.passport.user])
    if(rows.length > 0) {
        req.session.role = rows[0].role
        return res.status(200).send({role : rows[0].role})
    }
})

module.exports = router