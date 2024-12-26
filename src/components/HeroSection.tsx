import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 pt-20 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
            <span className="block gradient-text">AI Writing Assistant</span>
            <span className="block gradient-text">for Everyone</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Boost your writing productivity with our AI-powered assistant. Perfect for students, professionals, and creative writers.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10">
                Get started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

