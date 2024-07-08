const express = require('express')

const incomeController = require('../controllers/incomeControllers')

const router = express.Router()
router.post('/addincome', incomeController.addIncome)
router.get('/getincome', incomeController.getIncomes)
router.delete('/deleteincome/:id', incomeController.deleteIncome)

module.exports = router;