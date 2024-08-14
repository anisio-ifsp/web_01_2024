import { Repository } from "typeorm";
import { Estoque } from "../model/entity/Estoque";
import dataSource from "../database/mysql";

export class EstoqueRepository {
  private repository: Repository<Estoque>;
  private static instance: EstoqueRepository;

  public static getInstance(): EstoqueRepository {
    if (!this.instance) {
      this.instance = new EstoqueRepository();
    }
    return this.instance
  }

  constructor() {
    this.repository = dataSource.getRepository(Estoque);
  }

}