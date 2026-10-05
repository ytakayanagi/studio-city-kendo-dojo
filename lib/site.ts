export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
]

export type NavigationType = typeof navigation

export const address = {
  venue: 'Bridges Academy',
  street: '3921 Laurel Canyon Blvd',
  city: 'Studio City, CA 91604',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=3921+Laurel+Canyon+Blvd+Studio+City+CA+91604',
}

export const affiliations = [
  {
    name: 'Southern California Kendo Organization',
    shortName: 'SCKO',
    href: 'https://www.socalkendo.org/',
    logo: '/logo-scko.png',
  },
  {
    name: 'All United States Kendo Federation',
    shortName: 'AUSKF',
    href: 'https://www.auskf.org/',
    logo: '/logo-auskf.png',
  },
  {
    name: 'International Kendo Federation',
    shortName: 'FIK',
    href: 'https://www.kendo-fik.org/',
    logo: '/logo-fik.png',
  },
]
