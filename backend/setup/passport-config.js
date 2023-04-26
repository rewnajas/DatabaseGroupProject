const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const db = require('./database-config')
const bcrypt = require('bcryptjs')

passport.use(new localStrategy(async(username,password,done)=>{
    const [rows] = await db.query('SELECT * FROM profile WHERE username=?',[username])
    if(rows.length > 0) {
        if(await bcrypt.compare(password,rows[0].password)) {
            return done(null,username)
        }
    }
    return done(null,false)
}))

passport.serializeUser(async(username,done)=>{
    const [rows] = await db.query('SELECT * FROM profile WHERE username=?',[username])
    return rows.length>0 ? done(null,rows[0].username)
                           :done(null,false)
})

passport.deserializeUser(async(username,done)=>{
    const [rows] = await db.query('SELECT * FROM profile WHERE username=?',[username])
    return rows.length>0? done(null,rows[0].username)
                          :done(null,false)
})

module.exports = passport