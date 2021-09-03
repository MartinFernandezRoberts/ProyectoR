module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/auth/google');
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/');
        } else {
            return next();
        }
    },
    ensureAdmin: function (req, res, next) {
        if (!req.user.google.administra) {
            res.redirect('/');
        } else {
            console.log('Welcome mr. Admin');
            return next();
        }
    },
};
