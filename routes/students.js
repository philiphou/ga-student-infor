var express = require('express');
var router = express.Router();
const studentsCtrl = require('../controllers/students')
/* GET users listing. */
router.get('/',studentsCtrl.index)
router.get('/new', studentsCtrl.new);
router.post('/',studentsCtrl.create);
router.get('/:id',studentsCtrl.show);
router.delete('/:id',studentsCtrl.deleteOne);

module.exports = router;
