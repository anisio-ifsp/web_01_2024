import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carro } from './Carro';

@Entity()
export class Categoria{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome: string;

  @OneToMany(() => Carro, carro => carro.categoria)
  carros!: Carro[];

  constructor(nome: string) {
    this.nome = nome;
  }
}
