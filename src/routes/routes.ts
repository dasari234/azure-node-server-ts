import * as express from 'express';

export const routes = express.Router();

routes.get('', (req, res) => res.send({title: 'world', name:'Srinivas Dasari'}));
routes.get('/api', (req, res) => res.send({hello: 'world'}));
routes.get('/api/users', (req, res) => res.send({hello: 'world...'}));
routes.post('/users', (req, res) => res.send({hello: 'welcome************.'}));