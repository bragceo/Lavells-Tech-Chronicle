const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const blogController = require('../controllers/blogController');
const auth = require('../middleware/auth');
const Blog = require('../models/blog');
const User = require('../models/user');


// Index route
router.get('/', (req, res) => {
    Blog.findAll({
        raw: true,
        nest: true,
        include: [{
            model: User,
            required: true
        }],
    }).then(blogs => {
        blogs = blogs.map(blog => {
            blog.content = blog.content.substring(0, 200) + "...";
            let date = new Date(blog.createdAt);
            blog.createdAt = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
            return blog;
        });

        res.render('index', {
            req,
            blogs
        })
    });
});

// login routes
router.get('/login', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    }
    else {
        res.render('login', {
            req
        })
    }
});

router.post('/login', userController.login);

// register route
router.get('/register', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    }
    else {
        res.render('register', {
            req
        })
    }
});

router.post('/register', userController.register);

// logout route
router.get('/logout', userController.logout);

// dashboard route
router.get('/dashboard', blogController.dashboard);


module.exports = router;