const db = require('../config/db');

const createTeachersTable = () => {
	const sql = `
        CREATE TABLE IF NOT EXISTS teachers (
		id INT AUTO_INCREMENT PRIMARY KEY,
		birthday DATE,
		lastname VARCHAR(255),
		firstname VARCHAR(255),
		email VARCHAR(255)
        );
    `;

	db.query(sql, (err) => {
		if (err) {
			console.error('Erreur lors de la création de la table "teachers":', err.message);
			throw err;
		}
		console.log('Table "teachers" créée ou déjà existante.');
	});
};

module.exports = { createTeachersTable };
