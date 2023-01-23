const router = require("express").Router();

router.get("/", async (_, res) => {
  res.render("homepage");
});

router.get("/dashboard", async (_, res) => {
  res.render("dashboard");
});

router.get("/login", async (_, res) => {
  res.render("login");
});

module.exports = router;
