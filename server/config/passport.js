const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback',
            },
            async (req, accsessToken, refreshToken, profile, done) => {
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value,
                    email: profile.emails[0].value,
                    administra: false,
                };

                try {
                    let user = await User.findOne({
                        'google.googleId': profile.id,
                    });

                    if (user) {
                        console.log('encontrado');
                        done(null, user);
                    } else {
                        if (!req.user) {
                            let isStaff = newUser.email.split('@').pop();
                            console.log(isStaff);

                            if (
                                isStaff === 'brvma.net' ||
                                isStaff === 'rifasapp.cl'
                            ) {
                                newUser.administra = true;
                                console.log(newUser.administra);
                            }

                            user = await User.create({ google: newUser });

                            done(null, user);
                        } else {
                            console.log(req.user);
                            let user = req.user;

                            user.google = newUser;
                            user.markModified('google');
                            await user.save();
                            done(null, user);
                        }
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        )
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};
