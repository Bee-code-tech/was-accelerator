export default {
  name: 'whatsappTeaser',
  title: 'WhatsApp Teaser Page',
  type: 'document',
  fields: [
    {
      name: 'mainNumber',
      title: 'Main Number',
      type: 'string',
      description: 'The big number in the headline (e.g., "2000+")',
    },
    {
      name: 'specialText',
      title: 'Special Text (Gradient)',
      type: 'string',
      description: 'Text with gradient styling (e.g., "status views")',
    },
    {
      name: 'timeFrame',
      title: 'Time Frame',
      type: 'string',
      description: 'Time period (e.g., "30 days!")',
    },
    {
      name: 'PrevText',
      title: 'Previous Text',
      type: 'string',
      description: 'Text to be before blue text (e.g., "Learn how to")',
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Text (Blue)',
      type: 'string',
      description: 'Text to be highlighted in blue (e.g., "grow and monetize")',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Rest of the description text after the highlighted text',
    },
    {
      name: 'whatsappLink',
      title: 'WhatsApp Group Link',
      type: 'url',
      description: 'Full WhatsApp group invitation link',
    },
    {
      name: 'membersCount',
      title: 'Members Count',
      type: 'string',
      description: 'Number of members (e.g., "2000+")',
      initialValue: '2000+',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      description: 'Rating score (e.g., "4.9")',
      initialValue: '4.9',
    },
    {
      name: 'expiredMessage',
      title: 'Expired Message',
      type: 'string',
      description: 'Message when countdown expires',
      initialValue: '🔔 Last chance to join!',
    },
  ]
}
