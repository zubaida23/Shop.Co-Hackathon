import React from 'react';

const Reviwe = () => {
  const reviews = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
      rating: 5,
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      rating: 5,
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
      rating: 5,
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
      rating: 5,
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&lsquo;s skill. It&lsquo;s like wearing a piece of art that reflects my passion for both design and fashion.",
      rating: 5,
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      review: "I&lsquo;m not just wearing a t-shirt; I&lsquo;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-5">
      <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">All Reviews (451)</h2>
        <div className="flex space-x-3">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 bg-white border border-gray-300 rounded-full py-1 px-4 transition-all hover:bg-gray-100 shadow-sm">Latest</button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 bg-white border border-gray-300 rounded-full py-1 px-4 transition-all hover:bg-gray-100 shadow-sm">White Reviews</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="ml-auto text-gray-500 text-sm">{review.date}</p>
            </div>
            <h3 className="font-semibold text-gray-800">{review.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{review.review}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 mx-auto flex items-center justify-center bg-black text-white text-sm font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-all">Load More Reviews</button>
    </section>
  );
};

export default Reviwe;
