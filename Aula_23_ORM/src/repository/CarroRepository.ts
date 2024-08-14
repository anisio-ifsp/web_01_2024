import { DataSource, Repository } from 'typeorm';
import { Carro } from '../model/entity/Carro';
import dataSource from '../database/mysql';

export class CarroRepository {
  private repository: Repository<Carro>;
  private static instance: CarroRepository;

  public static getInstance(): CarroRepository {
    if (!this.instance) {
      this.instance = new CarroRepository();
    }
    return this.instance
  }

  constructor() {
    this.repository = dataSource.getRepository(Carro);
  }

  async findAll(): Promise<Carro[]> {
    return this.repository.find();
  }

  async findOneById(id: number): Promise<Carro | null> {
    return this.repository.findOneBy({ id });
  }

  async createCarro(modelo: string, ano: number, placa: string, categoriaId: number): Promise<Carro> {
    const carro = this.repository.create({ modelo, ano, placa, categoriaId });
    return this.repository.save(carro);
  }

  async updateCarro(id: number, modelo: string, ano: number, placa: string, categoriaId: number): Promise<Carro | null> {
    const carro = await this.findOneById(id);
    if (carro) {
      carro.modelo = modelo;
      carro.ano = ano;
      carro.placa = placa;
      carro.categoriaId = categoriaId;
      return this.repository.save(carro);
    }
    return null;
  }

  async deleteCarro(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}