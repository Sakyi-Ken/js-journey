import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { package as pkg } from './package.js';

const port = process.env.port || process.env.Port || 5000;
const apiRoot = '/api' 

const app = express();
// configure app
app.use(bodyParser.urlencoded({ extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cors({ origin: /http:\/\/localhost/ })); // allow localhost:3000
app.options('*', cors()); // include before other routes

// configrue routes
const router = express.Router();
router.get('/', (req, res) => {
  res.send(`${pkg.description} - v${pkg.version}`);
});

// register all our routes
app.use(apiRoot, router);

app.listen(port, () => {
  console.log('Server up!!');
});




