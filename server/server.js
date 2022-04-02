const path = require('path');
const express = require('express');
const cors = require('cors');
const stashql = require('stashql');
const redis = require('redis');
const schema = require('./schema/schema');

const redisCache = redis.createClient();
redisCache.connect();
redisCache.on('connect', () => {
  console.log('The Redis cache is connected');
});

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const StashQL = new stashql(schema, redisCache, 30);

app.use('/graphql', StashQL.queryHandler, (req, res) => res.status(200).json(res.locals.data));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.static('client'));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// })

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});

// npm install stashql
// create query/mutation types and define author and book types
// create a schema
// create a redis cache
// create new instance of stashql , takes in schema and redis cache
// set up graphql endpoint
// middleware func = stashql.queryhandler
