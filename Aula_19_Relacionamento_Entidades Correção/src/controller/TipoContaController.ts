import { TipoContaService } from "../service/TipoContaService"; 
import { Request, Response } from "express";

    const serviceTipoConta:TipoContaService = new TipoContaService();

    export async function cadastrarTipoConta(req: Request, res:Response){
        try {
            const novoTipoConta = await serviceTipoConta.criaTipoConta(req.body);
            res.status(201).json(
                {
                    mensagem:"Tipo de conta criada com sucesso!",
                    tipo:novoTipoConta
                }
            );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function updateTipoConta(req: Request, res:Response){
        try {
            const tipoConta = await serviceTipoConta.atualizaTipoConta(req.body);
            res.status(200).json(
                    {
                        mensagem:"Tipo de conta atualizado com sucesso!",
                        tipo_conta:tipoConta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function deletaTipoConta(req: Request, res:Response){
        try {
            const conta = await serviceTipoConta.deletaTipoConta(req.body);
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

    export async function getTipoConta(req: Request, res:Response){
        try {
            const conta = await serviceTipoConta.getTipoConta(req.query.id, req.query.descricao,req.query.codigoTipoConta);
            res.status(200).json(
                    {
                        tipo_conta:conta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function getTiposConta(req: Request, res:Response){
        try {
            const conta = await serviceTipoConta.getTiposConta();
            res.status(200).json(
                    {
                        tipos_conta:conta
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }