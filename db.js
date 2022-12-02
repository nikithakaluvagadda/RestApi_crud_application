const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'host.docker.internal',
    database: 'students',
    password: 'postgrespw',
    port: 49153
});

module.exports = pool;