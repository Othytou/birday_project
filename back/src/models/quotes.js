const db = require('../config/db');

const createQuotesTable = () => {
	const sql = `
        CREATE TABLE IF NOT EXISTS quotes (
		id INT AUTO_INCREMENT PRIMARY KEY,
    	quote LONGTEXT NOT NULL,
    	author VARCHAR(255) NOT NULL
        );
    `;

	db.query(sql, (err) => {
		if (err) {
			console.error('Erreur lors de la création de la table "quotes":', err.message);
			throw err;
		}
		console.log('Table "quotes" créée ou déjà existante.');
	});
};

module.exports = { createQuotesTable };
