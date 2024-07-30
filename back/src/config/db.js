const mysql = require('mysql2');
require('dotenv').config();  // Assurez-vous que dotenv est installé et configuré

const connection = mysql.createConnection({
	host: process.env.DB_HOST || 'localhost',  // Utiliser le nom de service Docker
	port: process.env.DB_PORT || '3306',
	user: process.env.DB_USER || 'staff',
	password: process.env.DB_PASSWORD || 'pwd',
	database: process.env.DB_DATABASE || 'birthday_project'
});

connection.connect(err => {
	if (err) {
		console.error('Erreur de connexion à la base de données:', err.stack);
		return;
	}
	console.log('Connecté à la base de données MySQL en tant que ID', connection.threadId);
});

module.exports = connection;
