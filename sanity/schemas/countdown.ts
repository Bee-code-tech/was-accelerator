export default {
  name: 'countdown',
  title: 'Countdown Section',
  type: 'document',
  fields: [
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'string',
      description: 'Main heading text (e.g., "Limited Time Offer", "Special Deal")',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      description: 'Discount percentage (e.g., 85 for 85%)',
    },
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
      name: 'countdownDuration',
      title: 'Countdown Duration (minutes)',
      type: 'number',
      description: 'How long the countdown should run (in minutes from page load)',
      initialValue: 180,
    },
    {
      name: 'offerDescription',
      title: 'Offer Description',
      type: 'text',
    },
    {
      name: 'expiredMessage',
      title: 'Expired Message',
      type: 'string',
      description: 'Message to show when countdown expires',
      initialValue: 'Hurry! Limited spots available - Act now!',
    },
  ],
}
