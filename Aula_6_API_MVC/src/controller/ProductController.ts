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

export function pesquisarProdutoPorID (req: Request, res: Response){
    try {
        const produto = productService.consultarProduto(req.query.id);
        if(produto){
        res.status(200).json(
            {
                mensagem:"Produto encontrado com sucesso!",
                produto:produto
            }
            );
        }else{
            res.status(404).json({mensagem:"Produto não encontrado."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function listaProdutos (req: Request, res: Response){
    try {
        res.status(200).json(productService.getProducts());
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};