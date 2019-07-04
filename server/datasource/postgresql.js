const Pool = require('pg').Pool

const postgresql = new Pool({
    user: 'chadeubanksdev',
    host: 'localhost',
    database: 'formula1',
    password: 'passowrd',
    port: 5432,
});

module.exports = postgresql;
