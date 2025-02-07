import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-gray-50 py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          BROWSE BY DRESS STYLE
        </h2>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-6 md:px-12 lg:w-4/5">
        {/* Background Image applied to the section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6"
          style={{
            backgroundImage: "url('/images/background.jpg')", // Set your image path here
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {/* Casual */}
          <div className="relative">
            <Image
              src="/images/dress/casual.svg"
              alt="Casual"
              layout="responsive"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Formal */}
          <div className="relative">
            <Image
              src="/images/dress/formal.svg"
              alt="Formal"
              layout="responsive"
              width={300}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Party */}
          <div className="relative">
            <Image
              src="/images/dress/party.svg"
              alt="Party"
              layout="responsive"
              width={300}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Gym */}
          <div className="relative">
            <Image
              src="/images/dress/gym.svg"
              alt="Gym"
              layout="responsive"
              width={300}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
