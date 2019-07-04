const postgresql = require ('./datasource/postgresql.js');

const get = (request, response) => {

    postgresql.query('SELECT * FROM constructor_results ORDER BY constructor_results_id ASC', (error, results) => {
        if (error) { throw error }
        response.status(200).json(results.rows);
    });

};

module.exports = {
    get
};
