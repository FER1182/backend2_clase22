const express = require("express");
const { Router } = express;
const productoFaker = require("../src/faker.js")

const app = express()
app.use(express.json())

const productos = new productoFaker()

router.get("/productos-test", async (req, res) => {
  //let data = await archivo.getAll();
 
    let archivoProducto = productos
    res.render("index", { data: archivoProducto });
  })
  



module.exports = productosRoutes
