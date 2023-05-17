const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const feedbackController = require('../controllers/feedbackController');


// create comment feedback route

router.post('/comment', auth, feedbackController.create);

module.exports = router;