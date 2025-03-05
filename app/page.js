// app/page.js
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a1f2d] text-white">
      {/* Hero Section */}
      <section className="text-center px-4 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Highly <span className="text-orange-500">experienced</span> electrification experts
        </h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 mt-4">
          {[
            "Heavy Industries",
            "Automotive",
            "Pump Industry",
            "Aerospace",
            "Energy",
            "Academic Institutions",
            "Research Organisation",
            "Defence"
          ].map((industry, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 rounded-full">{industry}</span>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-2/3">
            <Image
              src="/images/journey.jpg"
              alt="Our Journey"
              width={500}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
              Sadeep Sasidharan - Founder
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-orange-500">journey</span> so far
            </h2>
            <p className="text-gray-400 mb-6">
              We're a firm based out of Bangalore working on next-gen technology development,
              consulting, and software distribution. Our team specializes in Electro-Mechanical,
              Electrical, Embedded Electronics, and Real-Time Operating Systems with a major
              focus on electrification.
            </p>
            <p className="text-gray-400">
              Our team is highly trained and experienced, capable of handling complex and challenging assignments
              to deliver optimized results consistently.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
