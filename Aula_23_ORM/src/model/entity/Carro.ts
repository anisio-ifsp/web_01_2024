import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Categoria } from './Categoria';
import { Estoque } from './Estoque';

@Entity()
export class Carro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  modelo: string;

  @Column()
  ano: number;

  @Column()
  placa: string;

  @Column()
  categoriaId: number;

  @ManyToOne(() => Categoria, categoria => categoria.carros)
  @JoinColumn({ name: 'categoriaId' })
  categoria!: Categoria;

  @OneToOne(() => Estoque, estoque => estoque.carro)
  estoque!: Estoque;

  constructor(modelo: string, ano: number, placa: string, categoriaId: number) {
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.categoriaId = categoriaId;
  }
}
