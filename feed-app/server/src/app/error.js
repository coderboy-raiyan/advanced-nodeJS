const router = require('express').Router();

router.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const { message } = error;

    res.status(status).json({ message });
});

module.exports = router;
