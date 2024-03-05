export default {
	name: 'experience',
	title: 'Experiences',
	type: 'document',
	fields: [
		{
			name: 'company',
			title: 'Company or Organization Name',
			type: 'string',
		},
		{
			name: 'position',
			title: 'Position or Role in Company',
			type: 'string',
		},
		{
			name: 'sofwareUsed',
			title: 'Softwares and Libraries used:',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'skill'}]
				},
			],
		},
		{
			name: "experience",
			title: "Experience",
			description: 'Write down all of your accomplishments and challenges you faced while working in the company.',
			type: "array",
			of: [{ type: "block" }],
		  },
	]
}