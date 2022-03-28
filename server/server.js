const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));


app.use(express.static('client'));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// })


app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
})