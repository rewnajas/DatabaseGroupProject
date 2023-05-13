const router = require('express').Router()
const { isUser } = require('../middleware/middleware')
const db = require('../database-config')
router.use(isUser)

router.get('/userTest', (req, res) => {
    res.status(200).end()
})

router.post('/searchRegx', async (req, res) => {
    const name = req.body.name
    if (name) {
        const [rows] = await db.query(`
  SELECT 
    (SELECT COUNT(*) FROM WEAPON 
     JOIN MILITARY ON ? = MILITARY.militaryID
     JOIN ARMORY ON MILITARY.unitID = ARMORY.unitID 
     WHERE WEAPON.armoryID = ARMORY.armoryID and WEAPON.status=1 and WEAPON.weaponName LIKE ?) as num_available, 
    WEAPON.*,ARMORY.armoryName 
  FROM WEAPON 
  JOIN MILITARY ON ? = MILITARY.militaryID
  JOIN ARMORY ON MILITARY.unitID = ARMORY.unitID 
  WHERE WEAPON.armoryID = ARMORY.armoryID and WEAPON.status=1 and WEAPON.weaponName LIKE ? 
  LIMIT 1`, [req.session.passport.user,name + '%', req.session.passport.user,name + '%']);
        res.send(rows).end()
    }
    res.end()
})

router.get('/search:name', async (req, res) => {
    const name = req.params.name
    const [rows] = await db.query('SELECT * FROM weapons WHERE weapon_name =?', [name])

    res.send(rows).end()

})

module.exports = router