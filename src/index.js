import express from "express"
const app = express()
app.use(express.json())
import routerProductos from "../api/productos.js";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);


const port = process.env.PORT || 8080
//midelwars de aplicacion

app.use(express.urlencoded({extended:false}))//para decodificar la url .
//archivos estaticos
app.use(express.static(__dirname + "/public"));

app.set("view engine" ,"ejs")
app.set("views","./views")
app.use("/",routerProductos);

//data
let msn = [];




//para servidor en la nube



//server
import  http from "http";
const server = http.createServer(app);

//socket IO
import { Server, Socket } from "socket.io";
const io = new Server(server);



//Conection Socket
    //el metodo on sirve para escuchar eventos


io.on("connection", (socket) => {
  console.log("un usuario se conecto");
      knex.from("productos").select("*")//esto devuelve promesa
        .then((json)=>{
          let archivoProducto = json
          socket.emit("mensage_back",archivoProducto); //sirve para emitir mensajes
        })
        .catch(err=>{
            console.log(err)
          return err
        })
  

   //escuchar eventos de mensajes
  socket.on("mensaje_cliente",(cliente)=>{
    console.log(cliente)
  }) 
    socket.on("dataMsn", (dataMsn) => {
    msn.push(dataMsn);
      socket.emit("mensage_chat",msn)
    //escuchar varios socket a la vez
    io.sockets.emit("mensage_chat",msn)

    });  
});

server.listen(port, () => {
  console.log("server oks");
});