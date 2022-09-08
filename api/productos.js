import express from "express"
const { Router } = express;
import productoFaker from "../src/faker.js"

const app = express()
app.use(express.json())

const routerProductos = express.Router();
const productos = new productoFaker()

routerProductos.get("/productos-test", (req, res) => {
  //let data = await archivo.getAll();
 
    let archivoProducto = productos
    res.render("index", { data: archivoProducto });
  })
  


export default routerProductos