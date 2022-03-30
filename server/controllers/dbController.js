const db = require('../models/db');

const dbController = {};

dbController.getRows = (req, res, next) => {
  const sqlQuery = 'SELECT * FROM Authors';
  db.query(sqlQuery)
    .then((results) => {
      const newResults = JSON.parse(results);
      console.log(newResults);
      res.locals.characters = newResults;
      return next();
    }).catch((e) => console.error(e.stack));
};
