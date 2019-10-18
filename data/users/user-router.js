const router = require('express').Router();

const Users = require('./user-model.js');

const validateUserData = require('./validate-user-data.js');

router.post('/', validateUserData, (req, res) => {
    const userData = req.body;
    Users.addUser(userData)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(404).json(err);
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Users.removeUser(id)
        .then(user => {
            res.status(200).json({ message: 'removed user from database' });
        })
        .catch(err => {
            res.status(404).json({ error: 'failed to remove user from database' });
        })
})

module.exports = router;