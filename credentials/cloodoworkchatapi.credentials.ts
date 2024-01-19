import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class cloodoworkchatapi implements ICredentialType {
	name = 'cloodoworkchatapi';
	displayName = 'cloodoworkchatapi';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	
	properties: INodeProperties[] = [
		
        {
            displayName: 'Authorization',
			name: 'authorization',
			type: 'string',
			default: '',
        },
        {
            displayName: 'X-WorkSuite-Company-Token',
			name: 'token',
			type: 'string',
			default: '',
        },
	];
	authenticate = {
		type: 'generic',
		properties: {
            headers: {
				'Authorization': '={{$credentials.authorization}}',
                'X-WorkSuite-Company-Token': '={{$credentials.token}}'
			},
		},
	} as IAuthenticateGeneric;
}