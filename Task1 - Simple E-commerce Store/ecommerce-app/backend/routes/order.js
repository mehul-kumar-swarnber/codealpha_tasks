const router = require("express").Router();
const auth = require("../middleware/auth");
const Order = require("../models/Order");

router.post("/", auth, async (req, res) => {
  const newOrder = new Order({
    userId: req.user._id,
    products: req.body.products,
    total: req.body.total
  });
  await newOrder.save();
  res.send("Order placed");
});

module.exports = router;
