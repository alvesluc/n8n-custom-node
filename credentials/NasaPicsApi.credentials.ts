import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class NasaPicsApi implements ICredentialType {
	name = 'nasaPicsApi';
	displayName = 'Nasa Pics API';
	documentationUrl =
		'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};
}
