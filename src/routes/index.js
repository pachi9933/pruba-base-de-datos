var express = require('express');
var router = express.Router();


//-------------pacj----------//


const productsController = require('../controllers/productsController');

// const actController = require('../controllers/actividadesController');


/* GET home page. */
router.get('/inicio', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 

router.get('/', productsController.listar);
router.get('/:id', productsController.detalle);


// router.get('/', actController.acti);

module.exports = router;
