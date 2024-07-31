import { ClienteService } from "../service/ClienteService";
import { Request, Response } from "express";

    const service:ClienteService = new ClienteService();

    export async function cadastrarCliente(req: Request, res:Response){
        try {
            const novoCliente = await service.novoCliente(req.body);
            res.status(201).json(
                {
                    mensagem:"Cliente criado com sucesso!",
                    cliente:novoCliente
                }
            );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function updateCliente(req: Request, res:Response){
        try {
            const cliente = await service.atualizaCliente(req.body);
            res.status(200).json(
                    {
                        mensagem:"Cliente atualizado com sucesso!",
                        cliente:cliente
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function deletaCliente(req: Request, res:Response){
        try {
            const cliente = await service.deletaCliente(req.body);
            res.status(200).json(
                    {
                        mensagem:"Cliente deletado com sucesso!",
                        cliente:cliente
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function getCliente(req: Request, res:Response){
        try {
            const cliente = await service.getCliente(req.query.id,req.query.name,req.query.cpf);
            res.status(200).json(
                    {
                        cliente:cliente
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }

    export async function getClientes(req: Request, res:Response){
        try {
            const cliente = await service.getClientes();
            res.status(200).json(
                    {
                        clientes:cliente
                    }
                );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
    }