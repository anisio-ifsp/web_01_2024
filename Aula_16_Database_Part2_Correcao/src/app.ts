import express from 'express';
import { cadastrarProduto, atualizarProduto, deletarProduto, filtrarProduto, listarTodosProduto } from './controller/ProductController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/product", cadastrarProduto)
app.put("/api/product", atualizarProduto)
app.delete("/api/product", deletarProduto)
app.get("/api/product", filtrarProduto)
app.get("/api/products", listarTodosProduto)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));