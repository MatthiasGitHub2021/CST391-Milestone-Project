import { createPool, Pool } from "mysql";
let pool: Pool | null = null;

const initializeMySQLConnector = () => {
    try{
        // pool init null, now = to create pool
        pool = createPool({
            connectionLimit:
                parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT != undefined ? process.env.MY_SQL_DB_CONNECTION_LIMIT : ""),
            port:
                parseInt(process.env.MY_SQL_DB_PORT != undefined ? process.env.MY_SQL_DB_PORT : ""),
                host: process.env.MY_SQL_DB_HOST,
                user: process.env.MY_SQL_DB_USER,
                password: process.env.MY_SQL_DB_PASSWORD,           
                database: process.env.MY_SQL_DB_DATABASE,
        });

        console.debug('MySql Adapter Pool generated successfully');
        console.log('SQL database name: ', process.env.MY_SQL_DB_DATABASE);

        pool.getConnection((err, connection) => {
            if(err){
                console.log('error mysql failed to connect. Hi from my.sql.connector.ts' );
                throw new Error('not able to connect to database');
            }
            else{
                console.log('connection made');
                connection.release();
            }
        })
    } catch(error){
        console.log('[mysql.connector][initializeMySqlConnector][Error]: ', error)
        throw new Error('Failed to initialize pool');
    }
};

//promise = this will be finished eventually
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try{
        if(!pool){
            initializeMySQLConnector();
        }

        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error, results) => {
                if(error) reject(error);
                else resolve(results);
            });
    });
} catch (error){
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('failed to execute MySQL query.');
    }
}