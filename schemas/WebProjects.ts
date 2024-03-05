export default {
	name: 'webprojects',
	title:' Web Projects',
	type: 'document',
	fields: [
		{
			name: 'project',
			title: 'Project Name',
			type: 'string',
		},
		{
			name: 'overview',
			title: 'Project Overview',
			description: 'A short description about the project',
			type: 'string',
		},
		{
			name: 'projectlink',
			title: 'Project Link',
			type: 'url',
		},
		{
			name: 'githubURL',
			title:'Github URL',
			type: 'url',
		},
		{
			name: 'softwareUsed',
			title: 'Softwares and Libraries used:',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'skill'}],
				},
			],
		},
		{
			name: 'projectImage',
			title: 'Project Display Image',
			type: 'image',
		},
	]
}