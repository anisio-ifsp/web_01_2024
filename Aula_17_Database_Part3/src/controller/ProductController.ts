import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";


const productService = new ProductService();

export function cadastrarProduto (req: Request, res: Response){
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json(
            {
                mensagem:"Produto adicionado com sucesso!",
                produto:novoProduto
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};
