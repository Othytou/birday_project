const express = require('express');
const cors = require('cors');

const { createStudentsTable } = require('./models/students.js')
const { createQuotesTable } = require('./models/quotes.js')
const { createTeachersTable } = require('./models/intervenants.js')

const hostname = '0.0.0.0';
const port = 3002;

const server = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const birthdayRoute = require('./api/routes/birthdayRoute.js');
birthdayRoute(server);

const quoteRoute = require('./api/routes/quoteRoute.js');
quoteRoute(server);

const importCSV = require('./api/routes/importCSVRoute.js')
server.use('/import', importCSV)

createStudentsTable()
createTeachersTable()
createQuotesTable()

server.listen(port, hostname, () => {
  console.log(`Serveur qui tourne sur le port ${port}`);
});
