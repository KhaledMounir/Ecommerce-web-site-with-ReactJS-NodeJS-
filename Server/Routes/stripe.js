const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51LiHQ8FaQ85Xw2xYrmQYUM639mWTIEbgPSpM7waigja8NHYEpvj6K38RBP1IqE3lmvGgFjjwaQJuGVZUJm6JxpZg00K5JhWHfU"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: "tok_visa",
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
