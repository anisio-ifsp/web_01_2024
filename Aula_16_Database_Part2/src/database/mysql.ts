import mysql, { Connection} from 'mysql2';

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ifsp',
    database: 'vendas'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfig);

mysqlConnection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

export function executarComandoSQL(query: string, valores: any[], callback: (err:any, result:any)=>void){
    mysqlConnection.query(query, valores, (err, resultado:any) => {
        if (err) {
            console.error('Erro ao executar a query.', err);
            throw err;
        }
        console.log("Dentro do repository: ",resultado);
        return  callback(err,resultado);
    });
}
