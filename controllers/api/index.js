const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post.js');

router.use('/post', postRoutes);
router.use('/users', userRoutes);

module.exports = router;