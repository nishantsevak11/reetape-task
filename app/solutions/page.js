import Image from "next/image";
import SolutionCard from "../components/SolutionCard";

// Fetch solutions from JSON file
async function getSolutions() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/solutions.json`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <div className="min-h-screen text-white pt-10 mx-10 lg:mx-20">
      {/* Solutions Header */}
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Explore Our Solutions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how our advanced voice AI technology transforms various industries
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              imageUrl={solution.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
