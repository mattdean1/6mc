'use strict';
var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
  port: 8080
} );

module.exports = server;
