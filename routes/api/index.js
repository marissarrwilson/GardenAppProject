const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/garden", bookRoutes);

module.exports = router;
