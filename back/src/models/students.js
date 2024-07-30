const db = require('../config/db');

const createStudentsTable = () => {
	const sql = `
        CREATE TABLE IF NOT EXISTS students (
		id INT AUTO_INCREMENT PRIMARY KEY,
		birthday DATE,
		lastname VARCHAR(255),
		firstname VARCHAR(255),
		email VARCHAR(255)
        );
    `;

	db.query(sql, (err, results) => {
		if (err) {
			console.error('Erreur lors de la création de la table "students":', err.message);
			throw err;
		}
		console.log('Table "students" créée ou déjà existante.');
	});
};

module.exports = { createStudentsTable };
