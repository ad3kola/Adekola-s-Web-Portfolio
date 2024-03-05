export default {
	name: 'testimonial',
	title: 'Testimonials',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: "Person's Name",
			type: 'string',
		},
		{
			name: 'rating',
			title: 'Ratings',
			decription: 'A value between 0 and 5, in terms of stars rating',
			type: 'number',
		}
	]
}