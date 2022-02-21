const express = require("express");
const session = require("express-session");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const schema = require("./graphql/schema");

const app = express();

mongoose.connect(
  "mongodb+srv://animeet:xHFs56G5d0R67Bz8@cluster0.tzawj.mongodb.net/animeet"
);
mongoose.connection.on("connected", () => console.log("Connected!"));

app.set("trust proxy", 1);
app.use(
  session({
    secret: "animeet",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Listening!"));
