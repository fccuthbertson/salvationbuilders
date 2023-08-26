#!/usr/bin/env node

/**
 * Module dependencies.
 */
const app = require('../app');
const debug = require('debug')('express-server:server');
const http = require('http');
const https = require('https')
const fs = require("fs");

/*
* script args
* */

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

const sslServer = https.createServer({
    key : fs.readFileSync(process.env.SSL_KEY),
    cert : fs.readFileSync(process.env.SSL_CERT)
  },app)
sslServer.listen(sslPort)
sslServer.on('error', onError(sslPort))
sslServer.on('listening', onListening(sslServer))

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
