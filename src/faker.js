import express from "express";
import { faker } from "@faker-js/faker";

const app = express();

export function productoFaker() {
  const productos = [];
  for (let i = 0; i < 5; i++) {
    const producto={
        nombre: faker.commerce.product(),
        precio: faker.commerce.price(1000, 4000, 0, '$'),
        imagen:faker.image.business() 

    };
    productos.push(producto)
  }
  return {data: productos}
};

export default productoFaker
 