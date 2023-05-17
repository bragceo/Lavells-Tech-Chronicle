const Blog = require('../models/blog');
const User = require('../models/user');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const Feedback = require('../models/feedback');

exports.create = async (req, res) => {
    try {
        const { title, content } = req.body;
        const postedBy = req.session.user.id;
        //validate
        if (!title || !content) {
            return res.render('create', {
                err: "Please fill in all required fields",
                title: title,
                content: content
            });
        }
        else {
            const blog = await Blog.create({
                title,
                content,
                postedBy
            });
            res.redirect('/');
        }
    } catch (err) {
        console.log(err);
        res.render('create', {
            err: "Error creating blog",
            title: req.body.title,
            content: req.body.content
        });
    }
}

exports.update = async (req, res) => {
    try {
        const { blogid, title, content } = req.body;
        //validate
        if (!blogid || !title || !content) {
            return res.render('update', {
                err: "Please fill in all required fields",
                blogid: blogid,
                title: title,
                content: content,
                req: req
            });
        }

        const userID = req.session.user.id;
        console.log("hob ID: " + blogid);
        const blog = await Blog.findOne({ where: { id: blogid, postedBy: userID } });
        if (!blog) {
            res.render('update', {
                err: 'The Blog you are trying to update does not exist or you are not authorized to update it',
                blogid: blogid,
                req: req
            })
        }
        else {
            const updatedBlog = await Blog.update({
                title,
                content
            }, { where: { id: blogid } });
            res.redirect('/dashboard');
        }
    }
    catch (err) {
        console.log(err);
        res.render('update', {
            err: "Error updating blog",
            blogid: req.body.blogid,
            title: req.body.title,
            content: req.body.content,
        });
    }
}

exports.dashboard = async (req, res) => {
    try {
        let blogs = await Blog.findAll({
            where: { postedBy: req.session.user.id },
            raw: true,
            nest: true,
        });

        blogs = blogs.map(blog => {
            blog.content = blog.content.substring(0, 200) + "...";
            let date = new Date(blog.createdAt);
            blog.createdAt = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
            return blog;
        });

        res.render('dashboard', {
            blogs: blogs,
            req: req
        });
    } catch (err) {
        console.log(err);
        res.render('dashboard', {
            err: "Error fetching blogs"
        });
    }
}

exports.updateGet = async (req, res) => {
    try {
        const userID = req.session.user.id;
        const blog = await Blog.findOne({ where: { id: req.params.id, postedBy: userID } });
        if (!blog) {
            res.render('update', {
                err: 'The Blog you are trying to update does not exist or you are not authorized to update it',
                blogid: req.params.id,
                req: req
            })
        }
        else {
            res.render('update', {
                req: req,
                blogid: blog.id,
                title: blog.title,
                content: blog.content
            });
        }
    }
    catch (err) {
        console.log(err);
        res.render('update', {
            err: "Error updating Blog",
            blogid: req.params.id
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const userID = req.session.user.id;
        const blog = await Blog.findOne({ where: { id: req.params.id, postedBy: userID } });
        if (!blog) {
            res.render('dashboard', {
                err: 'You are not authorized to delete this blog',
                blogid: req.params.id
            })
        }
        else {
            const deletedBlog = await Blog.destroy({ where: { id: req.params.id } });
            res.redirect('/dashboard');
        }
    }
    catch (err) {
        console.log(err);
        res.render('dashboard', {
            err: "Error deleting blog",
            blogid: req.params.id
        });
    }
}

exports.view = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            attributes: ['id', 'title', 'content', 'postedBy',
            ],
            include: [{
                model: User,
                required: true
            }],
            where: { id: req.params.id },
            raw: true,
            nest: true,
        });

        if (!blog) {
            res.render('view', {
                err: 'The Blog you are trying to view does not exist',
                blogid: req.params.id
            })
        }
        else {
            const feedbacks = await Feedback.findAll({
                include: [{
                    model: User,
                    required: true
                }],
                where: {
                    blogid: req.params.id,
                    content: {
                        [Op.ne]: null
                    }
                },
                raw: true,
                nest: true,
            });

            blog.feedbacks = feedbacks;

            if (req.session.user) {
                const userID = req.session.user.id;

                const feed = feedbacks.filter(feedback => feedback.postedBy == userID);

                blog.userContent = feed.length ? feed[0].content : '';

                blog.user = blog.user.email;

                res.render('view', {
                    blog: blog,
                    req: req
                });
            }
            else {
                blog.user = blog.user.email;
                blog.userContent = '';

                res.render('view', {
                    blog: blog,
                    req: req
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.render('view', {
            err: "Error fetching blog"
        });
    }
}