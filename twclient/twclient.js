var Bluebird = require('bluebird');
var _ = require('underscore');
var Twit = require('twit');

Twit.prototype.postAsync = Bluebird.promisify(Twit.prototype.post);
Twit.prototype.getAsync = Bluebird.promisify(Twit.prototype.get);

var AngryRooster = function(config) {
    var T = null;
    this.T = new Twit({
        consumer_key: config.consumerKey,
        consumer_secret: config.consumerSecret,
        access_token: config.accessToken,
        access_token_secret: config.tokenSecret
    });
};

AngryRooster.prototype.gename = function(){
    console.log('LOL');
};

AngryRooster.prototype.tweet = function (message) {
    return this.T.postAsync('statuses/update', {status: message});
};

AngryRooster.prototype.followByPhrase = function (options) {

    var defaults = {
        count: 100
    }

    var opts = _.extend(options, defaults)

    var response = yield this.T.getAsync('search/tweets', { q: opts.phrase, count: opts.count })
    var tweets = response[0].statuses
    var userIds = _.uniq(tweets.map(function(tweet) {
        return tweet.user.id
    }))

    yield this.followUsersById(userIds)
}

AngryRooster.prototype.followUserFollowers = function (options) {

    var defaults = {
        count: 100
    }

    var opts = _.extend(options, defaults)

    var response = yield this.T.getAsync('followers/list', { screen_name : opts.username, count: opts.count })
    var users = response[0].users
    var userIds = users.map(function(user) {
        return user.id
    })
    yield this.followUsersById(userIds)
}

AngryRooster.prototype.followUsersById = function (userIds) {
    for(var userId of userIds) {
        this.T.postAsync('friendships/create', {user_id: userId})
    }
}


AngryRooster.prototype.followUsersByUsername = function (usernames) {
    for(var username of usernames) {
        this.T.postAsync('friendships/create', {screen_name: username})
    }
}

module.exports = AngryRooster;



