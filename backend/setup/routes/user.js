const router = require('express').Router()
const { isUser } = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)


module.exports = router