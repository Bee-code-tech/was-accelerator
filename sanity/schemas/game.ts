export default {
  name: 'gameCash',
  title: 'GameCash Teaser',
  type: 'document',
  fields: [
    {
      name: 'brandHighlight',
      title: 'Brand Highlight (Green)',
      type: 'string',
      description: 'Brand highlight text (e.g., "GameCash")',
    },
    {
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      description: 'Brand name text (e.g., "Pro")',
    },
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Badge text (e.g., "🎮💸 NEW OPPORTUNITY")',
    },
    {
      name: 'badgeHot',
      title: 'Badge Hot Label',
      type: 'string',
      description: 'Hot label text (e.g., "HOT")',
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'First part of heading (e.g., "Get Paid to")',
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Text (Gradient)',
      type: 'string',
      description: 'Text with gradient styling (e.g., "Play Games")',
    },
    {
      name: 'description1',
      title: 'Description Part 1',
      type: 'string',
      description: 'First part of description (e.g., "No experience needed. Just your")',
    },
    {
      name: 'highlightedPhone',
      title: 'Highlighted Phone Text',
      type: 'string',
      description: 'Phone text to highlight (e.g., "smartphone + data")',
    },
    {
      name: 'description2',
      title: 'Description Part 2',
      type: 'string',
      description: 'Second part of description (e.g., "daily earnings!")',
    },
    {
      name: 'bottomText',
      title: 'Bottom Text (Green)',
      type: 'string',
      description:
        'Bottom highlighted text (e.g., "Thousands are already cashing out, why not you?")',
    },
    {
      name: 'benefit1',
      title: 'Benefit 1',
      type: 'string',
      description: 'First benefit (e.g., "No capital")',
    },
    {
      name: 'benefit2',
      title: 'Benefit 2',
      type: 'string',
      description: 'Second benefit (e.g., "No referrals")',
    },
    {
      name: 'benefit3',
      title: 'Benefit 3',
      type: 'string',
      description: 'Third benefit (e.g., "No stress")',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description:
        'Button text - include "WhatsApp" for green button or "Telegram" for blue button',
      initialValue: 'Join WhatsApp Group Now',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'WhatsApp/Telegram group invitation link',
    },
    {
      name: 'expiredMessage',
      title: 'Expired Message',
      type: 'string',
      description: 'Message when countdown expires',
      initialValue: '💰 Start Earning Now - Join Today!',
    },
  ],
}
