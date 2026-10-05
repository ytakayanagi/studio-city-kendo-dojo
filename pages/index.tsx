import Link from 'next/link'
import { NextSeo } from 'next-seo'
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

import Button from '../components/Button/Button'
import CallToAction from '../components/CallToAction/CallToAction'
import LogoCloud from '../components/LogoCloud/LogoCloud'
import { address } from '../lib/site'

const highlights = [
  {
    value: '2 free',
    label: 'practices',
    description: 'Try kendo before you decide to join.',
  },
  {
    value: '5 to 50+',
    label: 'starting ages',
    description: 'Kids and adults train side by side.',
  },
  {
    value: '20+',
    label: 'years in Studio City',
    description: 'Teaching kendo in the southeast Valley.',
  },
  {
    value: 'Free',
    label: 'to watch',
    description: 'Observe a practice at no charge.',
  },
]

const steps = [
  {
    name: 'Get in touch',
    description:
      'Send us a quick message before you visit so we know to expect you and can suggest a good day to come.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Watch or try a practice',
    description:
      'Observe a class for free, or jump in. Your first two practices are a free trial, and there is no need to buy gear first.',
    icon: EyeIcon,
  },
  {
    name: 'Learn the basics',
    description:
      'Beginners start with etiquette, footwork, posture, how to hold the shinai (bamboo sword) and practice swings called suburi.',
    icon: SparklesIcon,
  },
]

const audiences = [
  {
    title: 'Complete beginners',
    description:
      'Most people outside of Japan start kendo as adults. No martial arts background needed, just curiosity.',
  },
  {
    title: 'Kids and families',
    description:
      'Our youngest student started at 5. Kids do best once they have a good attention span, and families can train together.',
  },
  {
    title: 'Returning kendoka',
    description:
      'Already practice kendo? You are welcome here. Get in touch before your first visit and come train with us.',
  },
]

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Learn Japanese Sword Martial Arts"
        description="Kendo classes in Studio City for kids and adults. Beginners welcome, with two free trial practices."
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          src="/hero.jpg"
          alt=""
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              剣道 &middot; Kendo in Studio City
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Learn the way of the sword, right in your neighborhood.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              For more than 20 years, Studio City Kendo Dojo has helped people
              in the southeast San Fernando Valley learn kendo. Beginners of all
              ages are welcome, and your first two practices are free.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                Try a free practice
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="/schedule" variant="outline">
                See the schedule
              </Button>
            </div>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <MapPinIcon
                className="h-5 w-5 text-blue-500"
                aria-hidden="true"
              />
              {address.street}, {address.city}
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-gray-200 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gray-200 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="bg-white px-4 py-8 sm:px-8">
              <dt className="text-sm font-medium text-gray-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-blue-700">
                {item.value}
              </dd>
              <dd className="mt-2 text-sm text-gray-500">{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What is kendo */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              What is kendo?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A modern martial art with samurai roots
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kendo (剣道), meaning &ldquo;way of the sword&rdquo;, is a modern
              Japanese martial art of sword-fighting based on traditional
              swordsmanship (Kenjutsu) which originated with the samurai class
              of feudal Japan.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              At our dojo, the goal is simple: enjoy practice and keep growing
              on your kendo journey. Along the way you build a strong mind and
              body, and respect for others.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-blue-700 hover:text-blue-600"
            >
              Meet our dojo and instructors
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                className="aspect-[800/484] w-full object-cover"
                src="/about-photo.jpg"
                alt="Studio City Kendo Dojo members, kids and adults, in kendo armor"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Kids, teens and adults practice together at our dojo.
            </p>
          </div>
        </div>
      </section>

      {/* First steps */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Getting started
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your first visit, step by step
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Never held a sword before? That is how almost everyone starts.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.name}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-gray-400">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Who practices here
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              There is no age limit in kendo
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {audiences.map((item) => (
              <div key={item.title} className="border-l-4 border-blue-700 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Proud member of the kendo community
          </h2>
          <p className="mt-2 max-w-2xl text-base text-gray-600">
            Grades and ranks earned at our dojo are recognized by dojos and
            organizations nationally and internationally.
          </p>
          <div className="mt-8">
            <LogoCloud />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
