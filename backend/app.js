import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import codeforcesRouter from "./routes/codeforces.js";
import authorRouter from "./routes/author.routes.js";
import mockInterview from "./routes/mock.routes.js";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import initializePassport from './config/passport.js';


const app = express();



initializePassport(passport);

app.use(express.urlencoded({extended:true}))
app.use(
    session({
      secret: process.env.ACCESS_TOKEN_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    })
  )


app.use(passport.initialize())
app.use(passport.session())


app.get(
  "/auth/callback",
  passport.authenticate("google", {
    failureRedirect: "/login", // Redirect to login page on failure
  }),
  (req, res) => {
    // Successful authentication, send access token back to frontend
    console.log("backend access token:-  ", req.accessToken);
    res.redirect(`http://localhost:3000/auth/callback/${req.accessToken}`);
  }
);



app.get('/auth',
	passport.authenticate('google', {
		scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'],
		accessType: 'offline',
		prompt: 'consent'
	}
	));

app.get('/', function (req, res) {
	res.send("done")
})









app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


app.use(cors());

app.use(express.json()); // agar form ka data json formate me aata he to use is middleware se use kiya jata he phle body-parser bhi use kiya jaat tha
app.use(urlencoded({ extended: true, limit: "16kb" })); // jab url me data aata he to bo diffrent diffrent charecter leta he use shi formate me change krta he
app.use(express.static("public")); // agar hame koi cheej server pr store krna he to yha uska path dena hota he ye middleware usi kam me aata he

app.use(cookieParser()); // iska use ham isiliye krte he ki jab ham client side pr store cookie pr server se read writew operation kr ske

app.use("/api/v1/author", authorRouter);
app.use("/api/codeforces", codeforcesRouter);
app.use("/api/mock/", mockInterview);

export { app };
