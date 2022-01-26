const express = require('express');
const router = express.Router();
const gpasCtrl = require('../controllers/gpas')

router.get('/students/:id/gpas/new',gpasCtrl.new)
router.put('/students/:id/gpas', gpasCtrl.create)

module.exports = router;