const router = require("express").Router();
const gardenController = require("../../controllers/gardenController");

// Matches with "/api/books"
router.route("/")
  .get(gardenController.findAll)
  .post(gardenController.createPost);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(gardenController.findById)
  .put(gardenController.update)
  .delete(gardenController.remove);

module.exports = router;