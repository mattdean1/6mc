ar AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
	httpsEnabled: false,
	port: process.env.PORT || 80
} );