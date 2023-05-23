const router = require('express').Router()
const db1 = require('../database-config')
const mysql = require('mysql2')
const { isGuard } = require('../middleware/middleware')

router.use(isGuard)

const db = mysql.createConnection({
    user: "sql12619821",
    host: "sql12.freemysqlhosting.net",
    password: "x4C185hCe4",
    database: "sql12619821"
})


router.get('/borrow', (req, res) => {
    db.query(`SELECT armoryID FROM guard WHERE militaryID=? `, [
        req.session.passport.user
    ], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            guardID = result[0].armoryID
            console.log(guardID)
            db.query(`SELECT * FROM borrow JOIN MILITARY ON 
                    borrow.militaryID = MILITARY.militaryID 
                    JOIN WEAPON ON borrow.weaponID = WEAPON.weaponID
                    WHERE borrow.borrowStatus = ? `, [ 'pending'], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result)
                    res.send(result);
                    
                }
            });
        }
    })


});

router.post('/updatedata', (req, res) => {
    const key = req.body.key;
    const weapon = req.body.weapon;
    const attributeValue = req.body.attribute;

    const sql = `UPDATE borrow SET borrow.borrowStatus = ? WHERE borrow.militaryID = ? AND borrow.weaponID = ?`;

    db.query(sql, [attributeValue, key, weapon], (error, result) => {
        if (error) {
            console.error('Error updating borrowStatus:', error);
            res.status(500).json({ error: 'Error updating borrowStatus' });
        } else {
            console.log('Borrow status updated successfully');
            res.sendStatus(200);
        }
    });
});

router.post("/countjoinrows", (req, res) => {
    const { key, weapon } = req.body;

    const query = `SELECT COUNT(*) AS count FROM borrow WHERE borrow.militaryID = ? AND borrow.weaponID = ?`;
    db.query(query, [key, weapon], (error, results) => {
        if (error) {
            console.error("Error counting join rows:", error);
            res.status(500).json({ error: "An error occurred while counting join rows." });
        } else {
            const count = results[0].count;
            res.status(200).json({ count });
        }
    });
});

router.get('/checkArmory', async (req, res) => {
    const [rows] = await db1.query(`SELECT WEAPON.* FROM WEAPON 
        JOIN MILITARY ON ? = MILITARY.militaryID
        JOIN ARMORY ON MILITARY.unitID = ARMORY.unitID 
        WHERE WEAPON.armoryID = ARMORY.armoryID`,
        [req.session.passport.user])
    res.send(rows).end()
})

module.exports = router