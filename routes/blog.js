const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const blogController = require('../controllers/blogController');


// create blog route
router.get('/create', auth, (req, res) => {
    res.render('create', {
        req
    })
});

router.post('/create', auth, blogController.create);

// update blog route
router.get('/update/:id', auth, blogController.updateGet);

router.post('/update', auth, blogController.update);

// delete blog route
router.get('/delete/:id', auth, blogController.delete);

// view blog route
router.get('/view/:id', blogController.view);

module.exports = router;