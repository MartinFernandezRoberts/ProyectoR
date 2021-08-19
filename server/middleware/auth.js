module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log('is');
            return next();
        } else {
            res.redirect('/auth/google');
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log('not');
            res.redirect('/');
        } else {
            console.log('not');
            return next();
        }
    },
    ensureAdmin: function (req, res, next) {
        if (!req.user.google.administra) {
            console.log(req.user.google.administra);
            res.redirect('/');
        } else {
            console.log('Welcome mr. Admin');
            return next();
        }
    },
};
