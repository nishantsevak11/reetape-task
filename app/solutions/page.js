"use client"; // Move fetching to client-side

import { useEffect, useState } from "react";
import SolutionCard from "../components/SolutionCard";

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const res = await fetch("/data/solutions.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setSolutions(data);
      } catch (error) {
        console.error("Error fetching solutions:", error);
      }
    }

    fetchSolutions();
  }, []);

  return (
    <div className="min-h-screen text-white pt-10 mx-10 lg:mx-20">
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Solutions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how our advanced voice AI technology transforms various industries
        </p>
      </div>

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
