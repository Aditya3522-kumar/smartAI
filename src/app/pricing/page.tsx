import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      "AI writing suggestions",
      "Grammar corrections",
      "5 documents per month",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "All Basic features",
      "Unlimited documents",
      "Plagiarism checker",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment"
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold text-center gradient-text mb-8">Pricing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-center text-black">{plan.name}</h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-extrabold text-black">{plan.price}</span>
                    {plan.name !== "Enterprise" && <span className="text-base font-medium text-gray-500">/month</span>}
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="ml-3 text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-8 bg-gray-50">
                  <Link href="/signup" className="block w-full px-4 py-2 text-center text-white bg-black rounded-md hover:bg-gray-800">
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

