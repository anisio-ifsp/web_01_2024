import { Request, Response } from "express";
import { DataService } from "../service/DataService";


const service = new DataService();

export function calculaIdade(req: Request, res:Response){
    try {
        const idade = service.calculaIdade(req.query.dataNascimento)

        res.status(200).json({
            mensagem: `A idade calculada é ${idade} anos.`
        });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
