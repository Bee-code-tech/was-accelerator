export default {
  name: 'blueprint',
  title: 'Blueprint',
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
      title: 'Blueprint Images',
      type: 'array',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'description',
              title: 'Image Description',
              type: 'text',
              description: 'Description of the image to be displayed as alt text',
            },
          ],
        },
      ],
    },
  ],
}
