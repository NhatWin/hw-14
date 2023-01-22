const router = require("express").Router();

router.get("/", async (_, res) => {
  res.render("homepage");
});

module.exports = router;
