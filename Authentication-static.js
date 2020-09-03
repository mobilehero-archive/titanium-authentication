
const _ = require('lodash');
let authenticationService;

class Authentication {

	static initialize({ provider, options }) {

		if (_.isNil(authenticationService)) {

			if (_.isNil(provider)) {
				throw new Error('Must provide a valid Authentication service provider');
			}
			if (_.isString(provider)) {
				authenticationService = new (require(provider))(options);
			} else {
				authenticationService = provider;
			}

		} else {
			throw new Error('Authentication service already initialized');
		}

	}

	static async authenticate({ username, password, options = {} } = {}) {
		turbo.track('🔒  you are here → Authentication.authenticate');
		if (_.isNil(authenticationService)) {
			throw new Error('Authentication service has not been initialized');
		}
		const authenticationResponse = await authenticationService.authenticate({ username, password, options });
		return authenticationResponse;
	}

	static async isAuthenticated() {
		turbo.track('🔒  you are here → Authentication.isAuthenticated');
		if (_.isNil(authenticationService)) {
			throw new Error('Authentication service has not been initialized');
		}
		return await authenticationService.isAuthenticated();
	}

	static async getPublicKey({ kid } = {}) {
		turbo.track(`🔒  you are here → Authentication.getPublicKey({kid:${kid}})`);

		if (_.isNil(authenticationService)) {
			throw new Error('Authentication service has not been initialized');
		}

		let public_key;
		if (_.isFunction(authenticationService.getPublicKey)) {
			public_key = await authenticationService.getPublicKey({ kid });
		}

		return public_key;
	}

}

module.exports = Authentication;
