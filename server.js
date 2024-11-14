require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('The server is running!');
});

// adjust the following:
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});



// const express = require('express');
// require('dotenv').config();


// const app = express();

// app.get('/', (req, res) => {
//   res.send('The server is running');
// });

// app.listen(3000, () => {
//   console.log('Listening on port http://localhost:3000');
// });
