#!/usr/bin/env node

/**
 * Module dependencies.
 */
const app = require('../app');
const debug = require('debug')('express-server:server');
const http = require('http');
const https = require('https')
const fs = require("fs");
const env = require('custom-env')

/*
* script args
* */
const args = process.argv.slice(2)
console.debug(args)
const isProd = args[0] === 'prod'
const isSsl = args[1] === 'ssl'

if(isProd) {
  env.env('prod', 'envs')
} else if (isSsl) {
  env.env('dev.ssl', 'envs')
} else {
  env.env('dev', 'envs')
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const sslPort = normalizePort(process.env.SSL_PORT || '3001')
app.set('sslPort', sslPort)
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

if(isSsl) {
  const sslServer = https.createServer({
    key : fs.readFileSync(process.env.SSL_KEY),
    cert : fs.readFileSync(process.env.SSL_CERT)
  },app)
  sslServer.listen(sslPort)
  sslServer.on('error', onError(sslPort))
  sslServer.on('listening', onListening(sslServer))
} else {
  server.listen(port)
  server.on('error', onError(port));
  server.on('listening', onListening(server));
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(port) {
  return function (error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }

  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(server) {
  return function () {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
}
