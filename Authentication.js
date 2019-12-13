
const _ = require('lodash');


let serviceParams = _.get(Alloy, 'CFG.services.authentication');
if (_.isNil(serviceParams)) {
	serviceParams = Ti.App.Properties.getString('authentication-service');
	if (_.isNil(serviceParams)) {
		throw new Error('No Authentication Service defined.');
	}
}
_.isString(serviceParams) && (serviceParams = { module: serviceParams });
const authenticationService = new (require(serviceParams.module))(_.omit(serviceParams, 'module'));

class Authentication {

	static async authenticate({ username, password, domain }) {
		console.debug('🦖  you are here → Authentication.authenticate');
		const authenticationResponse = await authenticationService.authenticate({ username, password, domain });
		// console.error(`authenticationResponse: ${JSON.stringify(authenticationResponse, null, 2)}`);
		return authenticationResponse;
	}

}

module.exports = Authentication;
