import express from "express"
import { calculaIdade } from "./controller/DataController";

const app = express();
const PORT = 3040;

app.use(express.json());

app.get("/api/data/calculaIdade", calculaIdade);

app.listen(PORT, ()=>{console.log("API rodando na PORTA 3040")})