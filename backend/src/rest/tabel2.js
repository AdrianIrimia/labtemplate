/**
 * Created by Rize on 09-Jan-18.
 */

var express = require('express');
var router = express.Router();
var tabel2s = require('../service/').tabel2s;



router.get('/', tabel2s.list);
router.get('/:idFilm2', tabel2s.findById);
router.post('/', tabel2s.create);
// router.put('/:idFilm2',tabel2s.update);
router.delete('/:idFilm2', tabel2s.destroy);


module.exports = router;




