const express = require("express");
const session = require("express-session");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

const app = express();
const TEST_KEY = process.env.TEST_SECRET_API_KEY;
const stripe = require("stripe")(TEST_KEY);

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// MONGODB
mongoose.connect(
  "mongodb+srv://animeet:xHFs56G5d0R67Bz8@cluster0.tzawj.mongodb.net/animeet"
);
mongoose.connection.on("connected", () => console.log("Connected!"));

// STRIPE
app.post("/create-payment-intent", async (req, res) => {
  // const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// PASSPORT
app.set("trust proxy", 1);
app.use(
  session({
    secret: "animeet",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// GRAPHQL
app.use(
  "/graphql",
  graphqlHTTP({
    // schema,
    graphiql: true,
  })
);

// Proxy test
// app.get("/api", (req, res) => {
//   res.send({ name: "Max", age: 30 });
// });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Listening!"));
