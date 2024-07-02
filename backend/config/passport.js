import GoogleStrategy from "passport-google-oauth20";
import { User } from "../models/user.js";
import meet from "google-meet-api";
import jwt from "jsonwebtoken";
const Meeting = meet.meet;


export default function initializePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/callback",
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          // Get the user data from Google
          const newUser = {
            googleId: profile.id,
            userName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
            email: profile.emails[0].value,
          };

          // Find or create user in your database
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            user = await User.create(newUser);
          }

          const jwtPayload = {
            _id: user._id, // Include any relevant user data here
          };
          const jwtOptions = {
            expiresIn: '1d', // Adjust token expiration as needed
          };
          const token = jwt.sign(jwtPayload, process.env.ACCESS_TOKEN_SECRET, jwtOptions);

          // Pass accessToken and JWT token to the request object
          
          req.accessToken = token;

          // Pass accessToken to the request object
          // req.accessToken = accessToken;

          // Perform any other operations here if needed
          // Example: Integrating with Google Meet API
          Meeting({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: refreshToken,
            date: "2024-07-07",
            time: "02:59",
            summary: "summary",
            location: "location",
            description: "description",
            checking: 0,
          }).then(function (result) {
            process.env.GOOGLE_MEET_LINK= result;
            console.log("google meet id - ", result);
          }).catch((error) => {
            console.log(error);
          });

          // Done with authentication, pass user and accessToken to Passport
          done(null, user);
        } catch (err) {
          console.error(err);
          done(err);
        }
      }
    )
  );
  //     async (req, accessToken, refreshToken, profile, done) => {
  //       // Get the user data from Google

  //       console.log("accessToken - ", accessToken);
  //       const newUser = {
  //         googleId: profile.id,
  //         userName: profile.displayName,
  //         firstName: profile.name.givenName,
  //         lastName: profile.name.familyName,
  //         image: profile.photos[0].value,
  //         email: profile.emails[0].value,
  //       };

  //       try {
  //         // Find the user in our database
  //         let user = await User.findOne({ googleId: profile.id });

  //         if (user) {
  //           // If user is present in our database
  //           req.accessToken = accessToken;
  //           done(null, user, accessToken);
  //         } else {
  //           // If user is not present in our database, save user data to database
  //           user = await User.create(newUser);
  //           req.accessToken = accessToken;
  //           done(null, user, accessToken);
  //         }
  //       } catch (err) {
  //         console.error(err);
  //         done(err);
  //       }
  //       Meeting({
  //         clientId: clientID,
  //         clientSecret: clientSecret,
  //         refreshToken: refreshToken,
  //         date: "2024-07-07",
  //         time: "02:59",
  //         summary: "summary",
  //         location: "location",
  //         description: "description",
  //         checking: 0,
  //       })
  //         .then(function (result) {
  //           console.log("google meet id - ", result);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
       
  //     }
  //   )
  // );

  // Used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Used to deserialize the user
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });
}
