const jsonServer = require('json-server');
const serverless = require('serverless-http');
const seed = require('../src/server/seed');

const seedData = seed();
const server = jsonServer.create();
const router = jsonServer.router(seedData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/.netlify/functions/api', router);

module.exports.handler = serverless(server);
