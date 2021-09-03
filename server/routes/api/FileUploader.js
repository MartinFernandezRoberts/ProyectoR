const multer = require('multer');
const fs = require('fs');
const path = require('path');

class FileUploader {
    constructor() {
        this.upload = multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    const dir = this.buildDir(
                        file.mimetype,
                        req.user.id,
                        req.body.info.tipo
                    );
                    if (!dir) cb(null, false);

                    const fullPath = path.join(__dirname, '../..', dir);

                    if (!fs.existsSync(fullPath)) {
                        fs.mkdirSync(fullPath);
                    }

                    cb(null, fullPath);
                },
                filename: (req, file, cb) => {
                    const fileName = this.formatName(file.originalname);
                    cb(null, fileName);
                },
            }),
            fileFilter: (req, file, cb) => {
                if (
                    file.mimetype == 'image/png' ||
                    file.mimetype == 'image/jpg' ||
                    file.mimetype == 'image/jpeg' ||
                    file.mimetype == 'image/gif' ||
                    file.mimetype == 'application/pdf'
                ) {
                    cb(null, true);
                } else {
                    //console.log(file.mimetype);
                    cb(null, false);
                    return cb(new Error('Solo se permiten imágenes y pdf'));
                }
            },
        });
    }

    buildDir(formato, user, tipo) {
        switch (formato) {
            case 'image/png':
            case 'image/jpg':
            case 'image/jpeg':
            case 'image/gif':
                return `public/img/${tipo.toLowerCase()}`;

            case 'application/pdf':
                return `docs/${user}`;

            default:
                return '';
        }
    }

    formatName(originalName) {
        const safeName = originalName.toLowerCase().split(' ').join('-');
        const indexExt = safeName.lastIndexOf('.');
        const base = safeName.slice(0, indexExt);
        const ext = safeName.slice(indexExt);

        return base + Date.now() + ext;
    }
}

module.exports = FileUploader;
