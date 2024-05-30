import {connPool} from "../db/connect.js";

async function executeQuery(pool, query) {
    let connection;
    try {
        // Getting a connection from the pool
        connection = await pool.getConnection();
        const [results, ] = await connection.execute(query);
        console.log(results);
    } catch (error) {
        console.error('Error executing query:', error);
    } finally {
        await StylePropertyMap(2000);
        //Don't forget to release the connection when finished!
        if (connection) connection.release();
    }
}

const queries = [
    'CREATE TABLE document_type (documentTypeId INT(11) AUTO_INCREMENT PRIMARY KEY,documentTypeName VARCHAR(20) NOT NULL UNIQUE);',
    'CREATE TABLE person (personId INT(11) AUTO_INCREMENT PRIMARY KEY,personName VARCHAR(20) NOT NULL,personLast_name VARCHAR(20)'+
    'NOT NULL,personNumber VARCHAR(10) NOT NULL,documentTypeFk INT(11) NOT NULL, FOREIGN KEY (documentTypeFk) REFERENCES document_type(documentTypeId) );'
];
for (let query of queries) {
    executeQuery(connPool, query);
}