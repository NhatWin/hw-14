const router = require("express").Router();
const withAuth = require("../utils/authorize");

router.get("/", withAuth, async (_, res) => {
  res.render("homepage");
});

router.get("/dashboard", withAuth, async (_, res) => {
  res.render("dashboard");
});

router.get("/login", async (_, res) => {
  res.render("login");
});

module.exports = router;
