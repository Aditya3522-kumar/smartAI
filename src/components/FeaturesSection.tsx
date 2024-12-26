import { CheckCircle } from 'lucide-react'

const features = [
  "AI-powered writing suggestions",
  "Grammar and style corrections",
  "Plagiarism checker",
  "Multiple language support",
  "Integration with popular writing tools",
  "Customizable writing templates"
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            <span className="block gradient-text">Features</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI writing assistant comes packed with powerful features to enhance your writing experience.
          </p>
        </div>
        <div className="mt-20">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

