const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');
const productController = require('../controllers/productController');

const router = express.Router();

// Fixed route format
router.post('/add-firm', verifyToken, firmController.addFirm);
router.get('/uploads:imageName',(req,res)=>{
     const imageName = req.params.imageName;
     res.headersSent('Content-type','image/jpeg');
     req.sendFile(path.join(__dirname,'..','uploads',imageName))
})
 router.delete('/:firmId', firmController.deleteFirmById)

module.exports = router;









// const express = require('express');
// const firmController = require('../controllers/firmController');
// const verifyToken = require('../middlewares/verifyToken');

// const router = express.Router()
// router.post('/add.firm', verifyToken, firmController.addFirm)

// module.exports= router;