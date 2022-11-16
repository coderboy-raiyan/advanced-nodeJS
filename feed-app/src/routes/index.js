const router = require('express').Router();
const feedRouter = require('./feed/feed.router');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});

router.use('/feed', feedRouter);

module.exports = router;
