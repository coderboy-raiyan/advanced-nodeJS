const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'images'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const validateFile = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|webp/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);

    if (extension && mimeType) {
        return cb(null, true);
    }
    cb('Invalid file type. Only JPEG, PNG file are allowed.');
};

const uploader = multer({
    storage,
    limits: { fileSize: 4 * 1000 * 1000 },
    fileFilter: (req, file, cb) => validateFile(req, file, cb),
});

module.exports = uploader;
