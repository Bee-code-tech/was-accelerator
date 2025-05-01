const testimonialSchema = {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A title to describe the result',
    },
    {
      name: 'images',
      title: 'Testimonial Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'asset',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'description',
              title: 'Testimonial Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'list',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export default testimonialSchema
