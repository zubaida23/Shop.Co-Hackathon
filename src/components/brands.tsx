import Image from "next/image";

export default function Brands() {
  return (
    <main className="bg-neutral-900">
      <div className="w-full bg-neutral-900 py-10">
        {/* Container for logos */}
        <div className="w-full max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6 px-4">
          {/* Versace */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/brands/Group.png"
              alt="Versace Logo"
              width={150}
              height={75}
              className="h-auto w-auto max-w-[100px] sm:max-w-[150px]"
            />
          </div>

          {/* Zara */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/brands/zara-logo-1 1.png"
              alt="Zara Logo"
              width={150}
              height={75}
              className="h-auto w-auto max-w-[100px] sm:max-w-[150px]"
            />
          </div>

          {/* Gucci */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/brands/gucci-logo-1 1.png"
              alt="Gucci Logo"
              width={150}
              height={75}
              className="h-auto w-auto max-w-[100px] sm:max-w-[150px]"
            />
          </div>

          {/* Prada */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/brands/prada-logo-1 1.png"
              alt="Prada Logo"
              width={150}
              height={75}
              className="h-auto w-auto max-w-[100px] sm:max-w-[150px]"
            />
          </div>

          {/* Calvin Klein */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/brands/Vector.png"
              alt="Calvin Klein Logo"
              width={150}
              height={75}
              className="h-auto w-auto max-w-[100px] sm:max-w-[150px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
