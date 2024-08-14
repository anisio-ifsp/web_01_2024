import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Carro } from './Carro';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantidade: number;

  @Column()
  carroId: number;

  @ManyToOne(() => Carro, carro => carro.estoque)
  @JoinColumn({ name: 'carroId' })
  carro!: Carro;

  constructor(quantidade: number, carroId: number) {
    this.quantidade = quantidade;
    this.carroId = carroId;
  }
}
