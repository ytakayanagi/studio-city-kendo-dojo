import { NextSeo } from 'next-seo'
import Team from '../components/Team/Team'

const founders = [
  {
    name: 'Michihiro Nakashima',
    rank: '7-dan Kyoshi',
    imageUrl: '/avatar.svg',
  },
  {
    name: 'Shigeshi Takei',
    rank: '',
    imageUrl: '/avatar.svg',
  },
]

const instructors = [
  {
    name: 'Carolyn Yatomi (Head Instructor)',
    rank: '5-dan',
    imageUrl: '/avatar.svg',
  },
  {
    name: 'Hide Mizutani',
    rank: '5-dan',
    imageUrl: '/avatar.svg',
  },
  {
    name: 'Ray Yada',
    rank: '4-dan',
    imageUrl: '/avatar.svg',
  },
  {
    name: 'Salyvan',
    rank: '3-dan',
    imageUrl: '/avatar.svg',
  },
]

export default function About(): JSX.Element {
  return (
    <>
      <NextSeo title="About" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              About
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              What is kendo?
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Kendo (剣道 Kendō), meaning “way of the sword”, is a modern
              Japanese martial art of sword-fighting based on traditional
              swordsmanship (Kenjutsu) which originated with the samurai class
              of feudal Japan
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white py-12">
        <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/about-photo.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-50" />
                <div className="relative px-8">
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Studio City Kendo Dojo is a recognized member of both
                        the Southern California Kendo Organization (SCKO) the
                        All United States Kendo Federation (AUSKF) and the
                        International Kendo Federation (FIK). All grades and
                        ranks you achieve are recognized by other dojos or
                        organizations at both National and International levels.
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Studio City Kendo Dojo
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Bridges Academy, formerly Osaka Sangyo University of Los
                  Angeles is home to Studio City Kendo Dojo, which is also known
                  as “OSULA.” Nakashima Sensei and Takei Sensei are OSULA
                  founding Sensei. Along with the other dojo Sensei and
                  instructors work together to provide not just a solid
                  understanding of kendo basics and the skills necessary for
                  rank advancement, National and International competition but
                  to help individuals develop a strong mind and body, and
                  respect for others.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Team title="Founders" subtitle="Our Pioneers" people={founders} />
        <Team
          title="Instructors"
          subtitle="Our Senseis and Assistants"
          people={instructors}
        />
      </div>
    </>
  )
}
