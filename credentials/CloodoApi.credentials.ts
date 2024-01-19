import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CloodoApi implements ICredentialType {
	name = 'cloodoApi';
	displayName = 'Cloodo API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'Bearer Token',
			name: 'token',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Company Token',
			name: 'com_token',
			type: 'string',
			default: '',
		},
	];
	authenticate = { // eslint-disable-line
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '=Bearer {{$credentials.token}}',
				'X-Worksuite-Company-Token': '={{$credentials.com_token}}'
			}
		},
	} as IAuthenticateGeneric;
}
