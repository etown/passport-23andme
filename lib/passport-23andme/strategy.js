/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The 23AndMe Personal Genome API authentication strategy authenticates requests by delegating to
 * 23AndMe Personal Genome API using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your 23AndMe Personal Genome API application's App ID
 *   - `clientSecret`  your 23AndMe Personal Genome API application's App Secret
 *   - `callbackURL`   URL to which 23AndMe Personal Genome API will redirect the user after granting authorization
 *   - `scope`   	   Scopes requested; `basic` and `names` are required
 *
 * Examples:
 *
 *     passport.use(new TwentyThreeAndMeStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/23andme/callback',
 *		   scope: 'basic names haplogroups rsXXXX'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api.23andme.com/authorize';
  options.tokenURL = options.tokenURL || 'https://api.23andme.com/token';
  options.scopeSeparator = options.scopeSeparator || '%20';

  OAuth2Strategy.call(this, options, verify);
  this.name = '23andme';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);



/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
