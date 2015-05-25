var tw = require('./twclient');
var config = {};
	config.consumerKey = '6atZCOQPRIhTukYFE5slw';
	config.consumerSecret = 'kJHZRek1zbxdUYBqmCDXB3DBvbOr1YZpqWFuMTuOQos';
	config.accessToken = '12984842-LVH5GyobY7IYYcUs8bNqtNQf2yHfyhdo9smO2Qs';
	config.tokenSecret = 'S8Yih49DlpzNFQY1McJC36NCwoHG4oUDdUYpe9kg2A';

var twc = new tw(config);

twc.tweet('#codeland Enviar Tweets con Node.js [Bluebird, Underscore & Twit] - http://www.luistoscano.com/blog/2015/05/25/enviar-tweets-con-node-js/ #EsteTweetFueEnviadoConNodejs');


