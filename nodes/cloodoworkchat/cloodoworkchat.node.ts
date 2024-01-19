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
            
            
        //         displayName: 'Metadata',
        //         name: 'metadataUi',
        //         placeholder: 'Add Metadata',
        //         type: 'fixedCollection',
        //         default:'',
        //         displayOptions: {
        //             show: {
        //                 resource: [
        //                     '',
        //                 ],
        //                 operation: [
        //                     'post', 
        //                 ],
        //             },
        //         },
        //         description: '',
                
                
        //     },
            // Optional/additional fields will go here
            // {
            //     displayName: 'Additional Fields',
            //     name: 'additionalFields',
            //     type: 'collection',
            //     default: {},
            //     placeholder: 'Add Field',
            //     displayOptions: {
            //         show: {
            //             resource: [
            //                 'sendmessages',
            //             ],
            //             operation: [
            //                 'post',
            //             ],
            //         },
            //     },
            //     options: [
            //         {
            //             displayName: 'Option',
            //             name: 'Option',
            //             type: 'dateTime',
            //             default: '',
            //             routing: {
            //                 request: {
            //                     // You've already set up the URL. qs appends the value of the field as a query string
            //                     qs: {
            //                         date: '={{ new Date($value).toISOString().substr(0,10) }}',
            //                     },
            //                 },
            //             },
            //         },
            //     ],									
            // }
        ],
        displayName: 'cloodoworkchat',
        name: 'cloodoworkchat',
        icon: 'file:cloodo.png',
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