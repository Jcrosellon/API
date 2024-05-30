import { createPool } from "mysql2/promise";
// Create the connection pool. The pool-specific settings are the defaults
export const connPool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_db',
    port: '3306'
});