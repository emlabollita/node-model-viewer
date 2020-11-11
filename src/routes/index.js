const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {title:"Seleccionar AR", library:"none", inc:"none"});
});

router.get("/aframe-arjs-nft-marker", (req, res) => {
  res.render("aframe-arjs-nft-marker", {title:"ARJS", library:"aframe",  inc:"nft"});
});

router.get("/aframe-arjs-location", (req, res) => {
  res.render("aframe-arjs-location", { title: "Location", library:"aframe",  inc:"location"});
});

router.get("/model-viewer", (req, res) => {
  res.render("model-viewer", {
    title: "Catalogo de muebles",
    library:"modelviewer", 
    products: [
      {
        id: "1", title: "Silla 1", thumbnail: "sillon-01.png", modelAndroid: "sillon-01.glb", modelIos: "",
        info: {
          title: "",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, buttons:
          [{
            idButton: "1", text: "Madera", dataPosition:
              ["0.05417077966798953m", "0.3046349489374933m", "0.2583084345562832m"],
            dataNormal: ["0.675519902354402m 0.2826770428326241m 0.6810040755961024m"]
          },
            {
              idButton: "2", text: "Cuero", dataPosition:
                ["-0.1291145096661018m", "0.8057702221087616m", "-0.17824237023610806m"], dataNormal:
                ["0.6860421577973785m 0.4006422184164277m 0.6073153798044969m"]
            }]
      },
      {
        id: "2", title: "Silla 2", thumbnail: "sillon-02.png", modelAndroid: "sillon-02.glb", modelIos: "",
        info: {
          title: "Ejemplo de titulo",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, buttons:
          [{
            idButton: "1", text: "Soporte", dataPosition:
              ["0.5142824169074363m", "0.33847799857322103m", "0.06442486774694722m"], dataNormal:
              ["-0.04180120329211113m 0.9937518010756419m 0.10348921326519864m"]
          }, {
            idButton: "2", text: "Material", dataPosition:
                ["-0.8828091980213141m", "0.5879172750624077m", "0.22041062782930054m"], dataNormal:
                ["0.2478205458794466m 0.9681063172049637m 0.03681216684542619m"]
            },{
              idButton: "3", text: "Madera", dataPosition:
                  ["0.3732907430399899m", "0.15084902520419718m", "0.36282686179805457m"], dataNormal:
                  ["-0.0038532531381694495m -0.0018840971398487152m 0.9999908012668022m"]
            }]
      },
    ],
  });
});

module.exports = router;
