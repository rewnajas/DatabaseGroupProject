const router = require('express').Router()
const db = require('../database-config')

router.post('/borrow', async (req, res) => {
    const weaponList = req.body.weapon
    
    try {
        weaponList.map((val) => {
            db.query(`UPDATE WEAPON set status = 0 WHERE WEAPON.weaponName=? LIMIT ?`,
                [val.weaponName, val.amount])
        })
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }

    const weaponObj = []
    let obj = {}
    weaponList.map(async(val)=>{
        const [rows] = await db.query('SELECT weaponID FROM WEAPON WHERE weaponName=? LIMIT ?',[
            val.weaponName,
            val.amount
        ])
        if(rows.length === 1) {
             obj = {
                weaponID : rows[0].weaponID,
                borrowDate : val.borrowDate,
                returnDate : val.returnDate
            }
            weaponObj.push(obj)
        } else if(rows.length === 2) {
            let obj1 = {
                weaponID : rows[0].weaponID,
                borrowDate : val.borrowDate,
                returnDate : val.returnDate
            }
            weaponObj.push(obj1)

            let obj2 = {
                weaponID : rows[1].weaponID,
                borrowDate : val.borrowDate,
                returnDate : val.returnDate
            }
            weaponObj.push(obj2)
            
        }

        let i = 0

        weaponObj.map((val)=>{
            db.query(`INSERT INTO borrow 
            (militaryID,weaponID,borrowDate,returnDate,borrowStatus,returnStatus,borrowID,borrowReason)
            VALUES (?,?,?,?,?,?,?,?)`,[
                req.session.passport.user,
                val.weaponID,
                val.borrowDate,
                val.returnDate,
                'asdf',
                'd',
                i,
                req.body.reason
            ])
            i++
        })

       
    })

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
  LIMIT 1`, [req.session.passport.user, name + '%', req.session.passport.user, name + '%']);
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