const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001
const hostname = '172.17.26.145'

var query = ''

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next, hostname) {
  res.setHeader('Access-Control-Allow-Origin', `${hostname}:3000`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT','POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: /*'P1s2q3l4'*/ 'Spectra321',
    port: 5432, // default PostgreSQL port
});

app.get('/requests', async (req, res) => {
    try {
      const result = await pool.query(query);
      console.log("Fetching...", query)
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.post('/requests', async (req, res) => {
  var request = await req
  query = (Object.keys(request.body)[0])
  if (query !== undefined) {
    if (query.includes(':')) {
      query = query.replace(':','=')
    }
    res.status(300).json(query)
    console.log('New query: ', query)
  }
})

app.listen(port, hostname, () => {
  console.log(`App running on ${hostname}:${port}.`)
})