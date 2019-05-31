"use strict";
const express = require("express");
const cart = express.Router();
const shoppingCart = require("./cart-items");

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