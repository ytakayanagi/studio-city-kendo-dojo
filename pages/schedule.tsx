import { NextSeo } from 'next-seo'

export default function Schedule(): JSX.Element {
    return (
        <>
            <NextSeo title="Schedule" />
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="relative">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                                Schedule
                            </span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Practice and Events Schedule
                            </span>
                        </h1>
                    </div>

                    <div className="mt-16 max-w-7xl mx-auto">
                        {/* Desktop Calendar */}
                        <div className="hidden md:block rounded-lg overflow-hidden">
                            <div className="relative w-full" style={{ paddingBottom: '70%' }}>
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&showTz=0&showCalendars=0&showTabs=0&src=c3R1ZGlvY2l0eWtlbmRvQGdtYWlsLmNvbQ&color=%23039be5"
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: 0 }}
                                    frameBorder="0"
                                    scrolling="no"
                                />
                            </div>
                        </div>

                        {/* Mobile Calendar - Agenda View */}
                        <div className="md:hidden rounded-lg overflow-hidden">
                            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&showTz=0&showCalendars=0&showTabs=0&mode=AGENDA&src=c3R1ZGlvY2l0eWtlbmRvQGdtYWlsLmNvbQ&color=%23039be5"
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: 0 }}
                                    frameBorder="0"
                                    scrolling="yes"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
