export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            <span className="block gradient-text">What Our Users Say</span>
          </h2>
        </div>
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-500 italic">
              "This AI writing assistant has revolutionized my workflow. It's like having a professional editor by my side 24/7. Highly recommended for anyone serious about improving their writing."
            </p>
            <div className="mt-6">
              <p className="font-medium text-black">Jane Doe</p>
              <p className="text-gray-500">Freelance Writer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

