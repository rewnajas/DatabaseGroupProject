const router = require('express').Router()
const { isUser } = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)

router.get('/userTest', (req, res) => {
    res.status(200).end()
})


module.exports = router