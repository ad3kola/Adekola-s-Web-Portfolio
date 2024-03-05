export default {
	name: 'skill',
	title: 'Skills',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Skill Title',
			type: 'string',
		},
		{
			name: 'logo',
			title: 'Skill Image or Logo',
			type: 'image',
		},
		{
			"name": "proficiency",
			"type": "number",
			"title": "Proficiency",
			"description": "Proficiency level in percentage ( 0 - 100 )",
		  }
	]
}