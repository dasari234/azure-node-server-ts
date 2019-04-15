import * as express from 'express';
import path from 'path';

export const routes = express.Router();

// routes.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

routes.get('', (req, res) => res.send({title: 'world', name:'Srinivas Dasari'}));
routes.get('/api', (req, res) => res.send({hello: 'world ../ api'}));
routes.get('/api/users', (req, res) => res.send({hello: 'world.../users'}));
routes.post('/users', (req, res) => res.send({hello: 'welcome************.'}));