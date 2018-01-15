/**
 * Created by Rize on 09-Jan-18.
 */

var express = require('express');
var router = express.Router();
var tabel1s = require('../service/').tabel1s;



router.get('/', tabel1s.list);
router.get('/:idFilm1', tabel1s.findById);
router.post('/', tabel1s.create);
// router.put('/:idFilm1',tabel1s.update);
router.delete('/:idFilm1', tabel1s.destroy);



module.exports = router;

