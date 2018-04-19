/**
 * Declaration of Express Module
 */

import * as express from 'express';

/**
 * Declaration of body-parser Module
 */
import * as bodyParser from 'body-parser';

/**
 * Variable declaration of express
 */
var app = express();

import ApiRoutes from './api/tweets';

/**
 * Declaration of CORS Module
 */
import * as cors from 'cors';

/**
 * Declaration of Express to use CORS 
 */
app.use(cors());

/**
 * Declaration of Express to use body-parser
 */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.use('/', ApiRoutes());

/**
 * Express listen function with port that is being listened on
 */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});