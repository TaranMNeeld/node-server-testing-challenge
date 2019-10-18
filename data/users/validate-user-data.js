function validateUserData(req, res, next) {
    const user = req.body;
    if (!user.username) {
        res.status(400).json({ errorMessage: 'missing required username field' });
    } else if (!user.password) {
        res.status(400).json({ errorMessage: 'missing required password field' });
    } else if (!user.age) {
        res.status(400).json({ errorMessage: 'missing required age field' });
    } else {
        console.log('user validated');
        next();
    }
}

module.exports = validateUserData;