export default {
  name: 'scholarsPro',
  title: 'Scholars Pro Teaser',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Badge text after the star (e.g., "3 DAYS FREE POST-UTME CLASS")',
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'First part of the headline (e.g., "We produced")',
    },
    {
      name: 'highlightedScores',
      title: 'Highlighted Scores (Gradient)',
      type: 'string',
      description: 'Scores with gradient styling (e.g., "368 & 351 scores")',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'UTME year (e.g., "2025")',
    },
    {
      name: 'postUtmeText',
      title: 'POST-UTME Text',
      type: 'string',
      description: 'Text after "And we\'re set to do more in" (e.g., "POST-UTME")',
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
      initialValue: '🎓 Registration Open - Secure Your Spot Now!',
    },
    {
      name: 'trustIndicator1',
      title: 'Trust Indicator 1',
      type: 'string',
      description: 'First trust indicator text (e.g., "High PUTME Scores Guaranteed")',
      initialValue: 'High PUTME Scores Guaranteed',
    },
    {
      name: 'trustIndicator2',
      title: 'Trust Indicator 2',
      type: 'string',
      description: 'Second trust indicator text (e.g., "1000+ Admissions Secured")',
      initialValue: '1000+ Admissions Secured',
    },
  ],
}
