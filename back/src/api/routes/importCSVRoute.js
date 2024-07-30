module.exports = (server) => {
	const importStudentsControler = require("../controllers/importCSVController");

	server
		.get("/students", importStudentsControler.importCSV)
}