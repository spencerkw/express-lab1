"use strict";
const express = require("express");
const cart = express.Router();
const pool = require("./connection");

function selectAll(res) {
  pool.query("SELECT * FROM shoppingcart ORDER BY id").then(result => {
    res.json(result.rows);
  })
}

cart.get("/cart-items", (req, res) => {
  selectAll(res);
});

cart.post("/cart-items", (req, res) => {
  pool.query("INSERT INTO shoppingcart (product, price, quantity) VALUES ($1::text, $2::real, $3::int)", [
    req.body.product,
    req.body.price,
    req.body.quantity
  ]).then(() => {
    selectAll(res);
  });
});

cart.put("/cart-items/:id", (req, res) => {
  pool.query("UPDATE shoppingcart SET product=$1::text, price=$2::real, quantity=$3::int WHERE id=$4::int", [
    req.body.product,
    req.body.price,
    req.body.quantity,
    req.params.id
  ]).then(() => {
    selectAll(res);
  });
});

cart.delete("/cart-items/:id", (req, res) => {
  pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [Number(req.params.id)]).then(() => {
    selectAll(res);
  });
});

module.exports = cart;