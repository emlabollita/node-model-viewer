const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Catalogo de muebles",
    products: [
      { id: "1", title: "Silla 1", modelAndroid: "sillon-01.gltf", modelIos:"", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { id: "2", title: "Silla 2", modelAndroid: "sillon-02.glb", modelIos:"", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    ],
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Sección de contacto",
    products: [
      { id: "3", title: "Silla 3", modelAndroid: "modelo.gltf", modelIos:"" },
      { id: "4", title: "Silla 4", modelAndroid: "modelo.gltf", modelIos:"" },
    ],
  });
});

module.exports = router;
