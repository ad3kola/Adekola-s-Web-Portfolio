export default {
	name: "myinfo",
	title: "My Info",
	type: "document",
	fields: [
	  {
		name: "fullname",
		title: "Full Name",
		type: "string",
	  },
	  {
		name: 'role',
		title: 'Position / Role',
		type: 'array',
		of: [{type: 'string'},],
	  },
	  {name: 'shortDesc',
	  title: 'Short Description',
	  type: 'string',},
	  {
		name: "userimage",
		title: "Personal Image",
		type: "image",
	  },
	  {
		name: "email",
		title: "Email Address",
		type: "string",
	  },
	  {
		name: "address",
		title: "Specify your House Address",
		type: "string",
	  },
	  {
		name: "longDesc",
		title: "Long Description",
		description:
		  "Pls put a complete overview of who you are as a person and in your field of speciality.",
		type: 'string',
	  },
	],
  };