const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Ejemplo de realidad aumentada" });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Ejemplo de realidad aumentada en la pagina de contacto",
  });
});

module.exports = router;
