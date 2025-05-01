export default {
  name: 'countdown',
  title: 'Countdown Section',
  type: 'document',
  fields: [
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'string',
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'offerDescription',
      title: 'Offer Description',
      type: 'text',
    },
  ],
}
