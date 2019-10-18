const db = require('../db-config.js');

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser
}

function getUsers() {
    return db('users');
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}

function addUser(user) {
    return db('users')
        .insert(user);
}

function removeUser(id) {
    return db('users')
        .del()
        .where({ id });
}