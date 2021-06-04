const multer = require('multer');

class ImageUploader {
    constructor(dir) {
        this.upload = multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, `./server/public/img/${dir}`);
                },
                filename: (req, file, cb) => {
                    const fileName =
                        Date.now() +
                        file.originalname
                            .toLowerCase()
                            .split(' ')
                            .join('-');
                    cb(null, fileName);
                },
            }),
            fileFilter: (req, file, cb) => {
                if (
                    file.mimetype == 'image/png' ||
                    file.mimetype == 'image/jpg' ||
                    file.mimetype == 'image/jpeg' ||
                    file.mimetype == 'image/gif'
                ) {
                    cb(null, true);
                } else {
                    cb(null, false);
                    return cb(
                        new Error('Only .png, .jpg and .jpeg format allowed!')
                    );
                }
            },
        });
    }
}

module.exports = ImageUploader;
