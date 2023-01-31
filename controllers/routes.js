const router = require("express").Router();
const withAuth = require("../utils/authorize");
const User = require("../models/Users.js");

router.get("/", withAuth, async (_, res) => {
  res.render("homepage");
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

router.post("/api/user/login"),
  async (req, res) => {
    try {
      const userData = await User.findOne({
        where: { username: req.body.username },
      });

      if (!userData) {
        res.status(400).json({ message: "user not found" });
        return;
      }
      const validate = await userData.checkPassword(req.body.password);

      if (!validate) {
        res.status(400).json({ message: "incorrect password" });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: "logged in" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  };

module.exports = router;
