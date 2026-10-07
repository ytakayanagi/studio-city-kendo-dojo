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
  entryNote:
    'There is no entry off Laurel Canyon Blvd. You must enter off Maxwelton Rd at the main gate.',
}

export const saturday = {
  frequency: 'Usually two Saturday afternoons a month',
  note: 'Dates vary with the overall kendo schedule of events. Please email us to confirm dates and times.',
  venue: 'San Fernando Valley Japanese Community Center',
  street: '8850 Lankershim Blvd',
  city: 'Sun Valley, CA 91352',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=8850+Lankershim+Blvd+Sun+Valley+CA+91352',
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

export const practices = [
  {
    day: 'Friday',
    time: '7:00pm – 8:35pm',
    name: 'All levels',
  },
  {
    day: 'Friday',
    time: '8:40pm – 9:00pm',
    name: 'Advanced',
  },
]
