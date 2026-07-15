const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
  ]);
});

module.exports = router;