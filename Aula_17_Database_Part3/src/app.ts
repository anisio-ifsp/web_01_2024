import express from 'express';
import { cadastrarProduto } from './controller/ProductController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/product", cadastrarProduto)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));