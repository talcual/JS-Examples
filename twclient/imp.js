var tw = require('./twclient');
var config = {};
	config.consumerKey = '';
	config.consumerSecret = '';
	config.accessToken = '';
	config.tokenSecret = '';

var twc = new tw(config);

twc.tweet('#codeland Enviar Tweets con Node.js [Bluebird, Underscore & Twit] - http://www.luistoscano.com/blog/2015/05/25/enviar-tweets-con-node-js/ #EsteTweetFueEnviadoConNodejs');


