/**
 * Created by Rize on 09-Jan-18.
 */
var express = require('express');
var router = express.Router();
var tabels = require('../service/').tabels;



router.get('/', tabels.list);
router.get('/:idFilm', tabels.findById);
router.post('/', tabels.create);
// router.put('/:id',tabels.update);
router.delete('/:idFilm', tabels.destroy);



module.exports = router;



