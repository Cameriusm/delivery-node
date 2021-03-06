const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3001;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const parseRouter = require('./routes/parseRouter');
// const detailsRouter = require('./routes/detailsRouter');
// const parseController = require('/controllers/parseController.js');
// const parseRouter = express.Router();

// parseRouter.use('/parse', parseController.parse);
app.use('/api', parseRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
