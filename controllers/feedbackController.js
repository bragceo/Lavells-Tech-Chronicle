const Feedback = require('../models/feedback');

exports.create = async (req, res) => {
    try {
        const id = req.body.blogID;
        const userID = req.session.user.id;
        const content = req.body.comment;

        await Feedback.create({
            content: content,
            blogId: id,
            postedBy: userID
        });

        res.redirect('/blog/view/' + id);
    } catch (err) {
        console.log(err);
        res.render('/blog/view/' + id, {
            err: err,
            req: req,
            comment: content
        })
    }
}