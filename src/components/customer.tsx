import React from 'react';


const Customer = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="relative border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-yellow-500 mt-2 text-sm">⭐⭐⭐⭐☆</p>
            <p className="text-gray-700 text-sm mt-1 font-medium">Sarah M.</p>
            <p className="text-lg text-gray-800 mt-4">
            &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&lsquo;ve bought has exceeded my expectations.&quot;
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-yellow-500 mt-2 text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 text-sm mt-1 font-medium">Alex K.</p>
            <p className="text-lg text-gray-800 mt-4">
            &quot;Amazing customer service and high-quality products. I&apos;ve been a loyal customer for years and will continue to shop here.&quot;
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-yellow-500 mt-2 text-sm">⭐⭐⭐⭐☆</p>
            <p className="text-gray-700 text-sm mt-1 font-medium">James L.</p>
            <p className="text-lg text-gray-800 mt-4">
            &quot;The delivery was super fast, and the packaging was lovely. The product quality is top-notch! Highly recommended.&quot;
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative border rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-yellow-500 mt-2 text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 text-sm mt-1 font-medium">Michael T.</p>
            <p className="text-lg text-gray-800 mt-4">
            &quot;Shop.co never fails to impress. The variety of options and the attention to detail in every product are truly remarkable.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
