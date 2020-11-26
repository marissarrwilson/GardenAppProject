const router = require("express").Router();
const bookRoutes = require("./garden");

// Book routes
router.use("/garden", bookRoutes);

module.exports = router;
