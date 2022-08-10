const router = require('express').Router();

const UserRoutes = require('./UserRoutes');
const AuthenticationRoutes = require('./AuthenticationRoutes');

router.use('/user', UserRoutes);
router.use('/auth', AuthenticationRoutes);

module.exports = router;
