const fs = require('fs');
const path = require('path');
const csv = require('csv-parse');
const connection = require('../../config/db');

exports.importCSV = (req, res) => {
	const results = [];
	const filePath = path.join(__dirname, '../data/students.csv');

	fs.createReadStream(filePath)
		.pipe(csv({ separator: ';' }))
		.on('data', (data) => results.push(data))
		.on('end', () => {
			const query = 'INSERT INTO students (birthday, lastname, firstname, email) VALUES ?';
			const values = results.map(row => [
				new Date(row.birthday.split('/').reverse().join('-')), // Convertir la date en format YYYY-MM-DD
				row.lastname,
				row.firstname,
				row.email
			]);

			connection.query(query, [values], (error) => {
				if (error) {
					console.error('Erreur lors de l\'insertion des données:', error);
					return res.status(500).send('Erreur serveur');
				}
				res.send('Données insérées avec succès');
			});
		});
};
