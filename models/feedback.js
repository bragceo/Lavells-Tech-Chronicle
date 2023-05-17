const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./user');
const Blog = require('./blog');

const Feedback = db.define('feedback', {
    content: {
        type: Sequelize.TEXT,
        allowNull: true,
    }
});

Feedback.belongsTo(User, { foreignKey: 'postedBy' });

module.exports = Feedback;