import Image from 'next/image';

export default function SolutionCard({ title, description, imageUrl }) {
  return (
    <div className="text-white flex flex-col  lg:flex-row mb-20 items-center  rounded-lg max-w-4xl mx-auto">
      {/* Image Section */}
      <div className="w-full lg:w-2/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="w-full max-w-2/3 text-center lg:text-left lg:ml-15">
        <h2 className="text-2xl text-red-500 md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}