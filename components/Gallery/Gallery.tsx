import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { cx } from '../../lib/cx'
import type { Photo, PhotoCategory } from '../../lib/photos'

type GalleryProps = {
  photos: Photo[]
}

const filters: Array<'All' | PhotoCategory> = [
  'All',
  'Practice',
  'Competition',
  'Community',
]

const Gallery = ({ photos }: GalleryProps): React.JSX.Element => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const visible =
    filter === 'All' ? photos : photos.filter((p) => p.category === filter)
  const current = openIndex === null ? null : visible[openIndex]

  const step = (delta: number) =>
    setOpenIndex((index) =>
      index === null ? null : (index + delta + visible.length) % visible.length,
    )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div>
      <div
        role="group"
        aria-label="Filter photos"
        className="flex flex-wrap gap-2"
      >
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
            className={cx(
              'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
              filter === name
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-100',
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <ul
        role="list"
        className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        {visible.map((photo, index) => (
          <li key={photo.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block w-full overflow-hidden rounded-3xl bg-gray-100 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <img
                className="w-full transition-transform duration-700 group-hover:scale-105"
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-black/70 to-transparent p-4 pt-12 text-left opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm font-semibold text-white">
                  {photo.caption ?? photo.category}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={current !== null}
        onClose={() => setOpenIndex(null)}
        className="relative z-60"
      >
        <div className="fixed inset-0 bg-black/95" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-10">
          <DialogPanel className="flex max-h-full w-full max-w-6xl flex-col items-center">
            {current && (
              <>
                <img
                  className="max-h-[80vh] w-auto rounded-2xl object-contain"
                  src={current.src}
                  alt={current.alt}
                />
                <div className="mt-4 flex w-full items-center justify-between gap-4 text-white">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-white">
                      {current.caption ?? current.category}
                    </span>{' '}
                    · {(openIndex ?? 0) + 1} / {visible.length}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      className="rounded-full p-2.5 ring-1 ring-white/20 hover:bg-white/10"
                    >
                      <span className="sr-only">Previous photo</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      className="rounded-full p-2.5 ring-1 ring-white/20 hover:bg-white/10"
                    >
                      <span className="sr-only">Next photo</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(null)}
                      className="rounded-full p-2.5 ring-1 ring-white/20 hover:bg-white/10"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}

export default Gallery
