"use strict";
const express = require("express");
const cart = express.Router();

const shoppingCart = [
  {
    id: 11,
    product: "teddy bear",
    price: 15,
    quantity: 5
  },
  {
    id: 12,
    product: "book",
    price: 10,
    quantity: 15
  },
  {
    id: 13,
    product: "burger",
    price: 8,
    quantity: 3
  },
  {
    id: 14,
    product: "cookies",
    price: 12,
    quantity: 8
  }
];

cart.get("/cart-items", (req, res) => {
  res.json(shoppingCart);
});

cart.post("/cart-items", (req, res) => {
  // console.log(req.body);
  shoppingCart.push(req.body);
  res.json(shoppingCart);
});

cart.put("/cart-items/:id", (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  let index = shoppingCart.findIndex(item => item.id == req.params.id);
  shoppingCart.splice(index, 1, req.body);
  res.json(shoppingCart);
});

cart.delete("/cart-items/:id", (req, res) => {
  // console.log(req.params.id);
  let index = shoppingCart.findIndex(item => item.id == req.params.id);
  shoppingCart.splice(index, 1);
  res.json(shoppingCart);
});

module.exports = cart;