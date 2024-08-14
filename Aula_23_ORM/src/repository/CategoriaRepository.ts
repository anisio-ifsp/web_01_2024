import { Repository } from "typeorm";
import { Categoria } from "../model/entity/Categoria";
import dataSource from "../database/mysql";

export class CategoriaRepository {
  private repository: Repository<Categoria>;
  private static instance: CategoriaRepository;

  public static getInstance(): CategoriaRepository {
    if (!this.instance) {
      this.instance = new CategoriaRepository();
    }
    return this.instance
  }

  constructor() {
    this.repository = dataSource.getRepository(Categoria);
  }

  async findAll(): Promise<Categoria[]> {
    return this.repository.find();
  }

  async findOneById(id: number): Promise<Categoria | null> {
    return this.repository.findOneBy({ id });
  }

  async createCategoria(nome: string): Promise<Categoria> {
    const categoria = this.repository.create({ nome });
    return this.repository.save(categoria);
  }

  async updateCategoria(categoria: Categoria): Promise<Categoria | null> {
    const categoriaGravada = await this.findOneById(categoria.id);
    if (categoriaGravada) {
      return this.repository.save(categoria);
    }
    return null;
  }

  async deleteCategoria(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}