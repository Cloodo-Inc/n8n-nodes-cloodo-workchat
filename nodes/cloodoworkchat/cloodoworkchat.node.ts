import { INodeType, INodeTypeDescription } from 'n8n-workflow';
export class cloodoworkchat implements INodeType {
	description: INodeTypeDescription = {
        // Basic node details will go here
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Get list user chat',
                        value: 'Getlistuserchat',
                    },
                    {
                        name: 'Get detail message with user id',
                        value: 'Getdetailmessagewithuserid',
                    },
                    {
                        name: 'Get list contact user chat with role',
                        value: 'Getlistcontactuserchatwithrole',
                    },
                    {
                        name: 'Send message',
                        value: 'Sendmessage',
                    },
                ],
                default: 'Get list user chat',
            },
            // Operations will go here
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'Getlistuserchat',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        action: 'Get list user chat',
                        description: 'Get list user chat',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/messages/list-user-chat',
                            },
                        },
                    },
                ],
                default: 'get',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'Getdetailmessagewithuserid',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        action: 'Get detail message with user id',
                        description: 'Get detail message with user id',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/messages/chat-message/6'
                            },
                        },
                    },
                ],
                default: 'get',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'Getlistcontactuserchatwithrole',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        action: 'Get list contact user chat with role',
                        description: 'Get detail message with user id',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/messages/list-contact-chat'
                            },
                        },
                    },
                ],
                default: 'get',
            },
            {
                displayName: 'ID user', // The value the user sees in the UI
                name: 'user_id', // The name used to reference the element UI within the code
                type: 'string',
                required: true, // Whether the field is required or not
                default: '',
                description: 'The name of the user',
                displayOptions: { // the resources and operations to display this element with
                    show: {
                        resource: [
                            'Sendmessage',
                        ],
                    }
                },
                routing: {
                    request: {
                        method: 'POST',
                        url: '/messages/send',
                        body: {
                            user_id: '={{ $value}}',
                        },
                    },
                },
                
            },
            {
                displayName: 'Message',
                name: 'message',
                type: 'string',
                required: true,
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Description',
                displayOptions: { // the resources and operations to display this element with
                    show: {
                        resource: [
                            'Sendmessage',
                            // comma-separated list of resource names
                        ],
                    }
                },
                routing: {
                    request: {
                        method: 'POST',
                        url: '/messages/send',
                        body: {
                            message: '={{$value }}',
                        },
                    },
                },
            },
        ],
        displayName: 'Cloodo WorkChat',
        name: 'cloodoworkchat',
        icon: 'file:logo-cloodo-64x64.png',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get data from NASAs API',
        defaults: {
            name: 'cloodoworkchat',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'cloodoworkchatapi',
                required: true,
            },
        ],
        requestDefaults:        
        {
            baseURL: 'https://erp-amz.cloodo.com/v4/',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },     
    };
}