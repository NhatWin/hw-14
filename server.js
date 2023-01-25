const express = require("express");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require("path");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const connection = require("./config/connection.js");
const { strict } = require("assert");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "secret",
  cookie: {
    maxAge: 60 * 60 * 60,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: connection,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/routes"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`),
    connection.sync({
      force: false,
    });
});
