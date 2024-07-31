import { Cliente } from "../model/Cliente";
import { Conta } from "../model/Conta";
import { ClienteRepository } from "../repository/ClienteRepository";
import { ContaRepository } from "../repository/ContaRepository";
import { calculaDiferencaDiasEntreDatas} from "../util/DataUtil";

export class ClienteService{
    private clienteRepository = ClienteRepository.getInstance();
    private contaRepository = new ContaRepository();

    async novoCliente(clienteData: any):Promise<Cliente>{
        const {name, cpf, dataNascimento} = clienteData;

        let cliente = new Cliente(undefined,name,cpf, dataNascimento)

        const clientesEncontrados: Cliente[]= await this.clienteRepository.getClienteByNameCpfId(undefined,cliente.cpf)

        if(clientesEncontrados.length > 0){
            throw new Error("Já existe um cliente cadastrado com esse CPF");
        }
        
        const idade = calculaDiferencaDiasEntreDatas(cliente.dataNascimento, new Date())

        if(idade < 18){
            throw new Error("Cliente deve possuir idade maior que 18 anos.");
        }

        return this.clienteRepository.insereCliente(cliente);
    }

    async atualizaCliente(clienteData: any):Promise<Cliente>{
        const {id, name, cpf, dataNascimentoString} = clienteData;

        if (typeof id !== 'number' ) {
            throw new Error("Informe um ID correto.");
        }
        const cliente = new Cliente(id, name, cpf, dataNascimentoString);

        const clientesEncontrados: Cliente[]= await this.clienteRepository.getClienteByNameCpfId(undefined,undefined,id)

        if(clientesEncontrados.length == 0){
            throw new Error("Cliente informado inexistente.");
        }

        this.clienteRepository.updateCliente(cliente);
        return cliente;
    }

    async deletaCliente(clienteData: any):Promise<Cliente>{
        const {id, name, cpf, dataNascimentoString} = clienteData;

        if (typeof id !== 'number' ) {
            throw new Error("Informe um ID correto.");
        }
        const cliente = new Cliente(id, name, cpf, dataNascimentoString);
        const clientesEncontrados: Cliente[]= await this.clienteRepository.getClienteByNameCpfId(cliente.name,cliente.cpf,cliente.id)

        if(clientesEncontrados.length == 0){
            throw new Error("Cliente informado inexistente.");
        }

        const contas: Conta[] = await this.contaRepository.getContaPorIdOuNumeroOuTipoOuCliente(undefined,undefined,undefined,cliente.id)
        if(contas.length > 0){
            throw new Error("Cliente informado não pode ser apagado pois existem contas vinculadas.");
        }
        const result:any = await this.clienteRepository.deletaCliente(cliente.id);
        return cliente;
    }

    async getCliente(id:any, name:any, cpf:any):Promise<Cliente|null>{
        const idNumber: number = parseInt(id,10);

        const result:Cliente[] = await this.clienteRepository.getClienteByNameCpfId(name,cpf,idNumber);
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getClientes():Promise<Cliente[]>{
        return this.clienteRepository.listaCliente();
    }
   
}