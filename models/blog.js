const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user');
const Feedback = require('./feedback');

const Blog = db.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

Blog.belongsTo(User, { foreignKey: 'postedBy' });
Blog.hasMany(Feedback, { foreignKey: 'blogId' });

User.sync().then(() => {
    Blog.sync().then(() => {
        Feedback.sync().then(() => {
            console.log('All models synced');
        });
    });
});


module.exports = Blog;