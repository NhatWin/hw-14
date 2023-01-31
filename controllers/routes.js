const router = require("express").Router();
const withAuth = require("../utils/authorize");
const User = require("../models/Users.js");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (_, res) => {
  res.render("dashboard");
});

router.get("/login", async (_, res) => {
  res.render("login");
});

// Login in
router.post("/api/user/create", async (req, res) => {
  User.create(req.body)
    .then(res.json("New User Made"))
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
  // Logs an exisiting user in
});

module.exports = router;
