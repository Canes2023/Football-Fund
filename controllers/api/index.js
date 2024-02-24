const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const donationRoutes = require('./donationRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/donation', donationRoutes);

module.exports = router;
