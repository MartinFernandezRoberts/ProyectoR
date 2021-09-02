const multer = require('multer');
const fs = require('fs');
const path = require('path');

class DocUploader {
    constructor() {
        this.upload = multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(
                        __dirname,
                        '../..',
                        this.extractPath(file.originalname)
                    );

                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir);
                    }

                    cb(null, dir);
                },
                filename: (req, file, cb) => {
                    const fileName = this.formatName(file.originalname);
                    cb(null, fileName);
                },
            }),
            fileFilter: (req, file, cb) => {
                if (file.mimetype == 'application/pdf') {
                    cb(null, true);
                } else {
                    console.log(file.mimetype);
                    cb(null, false);
                    return cb(new Error('Only .pdf format allowed!'));
                }
            },
            preservePath: true,
        });
    }

    extractPath(originalName) {
        const safeName = originalName.toLowerCase().split(' ').join('-');
        const i = safeName.lastIndexOf('/');

        return safeName.slice(0, i);
    }

    formatName(originalName) {
        const safeName = originalName.toLowerCase().split(' ').join('-');
        const indexPath = safeName.lastIndexOf('/') + 1;
        const indexExt = safeName.lastIndexOf('.');
        const base = safeName.slice(indexPath, indexExt);
        const ext = safeName.slice(indexExt);

        return base + Date.now() + ext;
    }
}

module.exports = DocUploader;
