const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const user = require('../models/user');

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(async function(id, done) {
  const USER = await user.find({googleId:id});

  done(null, USER);
});
passport.use(new GoogleStrategy({
    clientID: "546023397202-081u1hlbbnvgvv12990ck9ciulihg2h9.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    await user
        .findOne({ email: profile.emails[0].value }, async function (err, res) {
          let user1 = null;
          if (res === null) {
           
            user1 = await user.create({
              googleId: profile.id,
              username: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              user_type: "User",
              contact: profile.id,
              password: profile.id,
              
            });
          } else if (res) {
            res.googleId = profile.id;
            res.save();
            user1 = res;
          }
          return done(err, user1);
        })
        .clone();
  }
));