import { DataSource } from 'typeorm';
import * as path from 'path';


const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'locadora_carro',
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, '../model/entity/**/*.js')]
});

export default dataSource;

export async function startServer() {
    try {
      await dataSource.initialize();
      console.log('Banco de dados conectado com sucesso!');
    } catch (error) {
      console.error('Erro durante a inicialização do banco de dados.', error);
    }
  }