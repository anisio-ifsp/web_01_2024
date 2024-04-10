import express from "express";
import { cadastrarProduto, pesquisarProduto, listaProdutos, deletarProduto,atualizarProduto } from "./controller/ProductController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
//3. Altere o endpoint POST "/api/product"para que o mesmo passe a verificar se já existe um produto com a mesma descrição retornando para o cliente um erro com essa informação. ** Testei com o mesmo nome, faça com a descrição**
app.post("/api/product", cadastrarProduto);
//1. Altere o endpoint GET "/api/product", para que o mesmo possa pesquisar um produto tanto por ID do produto ou nome do produto.
app.get("/api/product",pesquisarProduto);
//2. Altere o endpoint GET "/api/products", para que os produtos sejam exibidos ordenados por preços, crescente ou decrescente conforme requisitado pelo cliente
app.get("/api/products", listaProdutos);

app.delete("/api/product", deletarProduto);
app.put("/api/product", atualizarProduto );

app.listen(PORT, logInfo);


