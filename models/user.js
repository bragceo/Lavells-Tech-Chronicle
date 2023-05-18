// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const User = db.define('user', {
//     username: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true
//     },
//     email: {
//         type: Sequelize.STRING,
//         validate: {
//             isEmail: true
//         },
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// module.exports = User;

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;
