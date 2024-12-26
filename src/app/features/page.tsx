import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CheckCircle } from 'lucide-react'

const features = [
  {
    title: "AI-powered writing suggestions",
    description: "Get intelligent suggestions to improve your writing style and clarity."
  },
  {
    title: "Grammar and style corrections",
    description: "Automatically detect and correct grammar, spelling, and punctuation errors."
  },
  {
    title: "Plagiarism checker",
    description: "Ensure your content is original with our advanced plagiarism detection tool."
  },
  {
    title: "Multiple language support",
    description: "Write confidently in multiple languages with our AI assistance."
  },
  {
    title: "Integration with popular writing tools",
    description: "Seamlessly integrate with your favorite writing applications and platforms."
  },
  {
    title: "Customizable writing templates",
    description: "Access a wide range of templates for various writing styles and purposes."
  }
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold text-center gradient-text mb-8">Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

