import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              Logo
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/features" className="text-gray-500 hover:text-black">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-500 hover:text-black">
              Pricing
            </Link>
            <Link href="/login" className="text-gray-500 hover:text-black">
              Login
            </Link>
            <Link href="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

