import { ContaService } from "../service/ContaService"; 
import { Request, Response } from "express";

    const serviceConta:ContaService = new ContaService();

    export async function cadastrarConta(req: Request, res:Response){
        try {
            const novaConta = await serviceConta.criaConta(req.body);
            res.status(201).json(
                {
                    mensagem:"Conta criada com sucesso!",
                    conta:novaConta
                }
            );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function updateConta(req: Request, res:Response){
        try {
            const conta = await serviceConta.atualizaConta(req.body);
            res.status(200).json(
                    {
                        mensagem:"Conta atualizada com sucesso!",
                        conta:conta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function deletaConta(req: Request, res:Response){
        try {
            const conta = await serviceConta.deletaConta(req.body);
            res.status(200).json(
                    {
                        mensagem:"Conta deletada com sucesso!",
                        conta:conta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function getConta(req: Request, res:Response){
        try {
            const conta = await serviceConta.getConta(req.query.id, req.query.numeroConta,req.query.tipoConta);
            res.status(200).json(
                    {
                        conta:conta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function getContas(req: Request, res:Response){
        try {
            const conta = await serviceConta.getTodasConta();
            res.status(200).json(
                    {
                        contas:conta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }