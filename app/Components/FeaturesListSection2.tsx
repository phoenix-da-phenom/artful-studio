import Image from "next/image";

interface FeaturesListSectionProps {
  caption: string;
  description: string;
  topic?: string;
}

export default function FeaturesListSection({
  caption,
  description,
  topic
}: FeaturesListSectionProps) {
  return (
    <main className="min-h-screen bg-primary/20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12">
        
        <h4 className="font-semibold mb-16">
          <span className="underline mr-2">02</span>
          <span className="underline">{topic}</span>
        </h4>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-14">

          
          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[520px]">
            <Image
              src="/img14.jpg"
              alt="Curated gallery preview"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-full max-w-xl text-center md:text-left">
              
              <p className="text-sm font-semibold tracking-wide mb-4">
                Collection
              </p>

              <h1 className="text-4xl sm:text-15xl lg:text-6xl font-semibold leading-[1.15]">
                {caption}
               
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
                {description}
              </p>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
