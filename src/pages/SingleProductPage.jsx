import React from "react";

const SingleProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden pt-17">
      {/* Left fixed image panel */}
      <div className="md:w-1/2 bg-base-200 p-6 flex justify-center items-start md:sticky top-0 h-[300px] md:h-screen">
        <img
          src="./src/assets/Hero bar.png"
          alt="Product"
          className="max-h-[300px] md:max-h-[500px] object-contain"
        />
      </div>

      {/* Right scrollable details */}
      <div className="md:w-1/2 overflow-y-auto p-6 space-y-6 ">
        <h1 className="text-3xl font-bold">Chocolate Protein Bar</h1>
        <p className="text-lg text-gray-600">Category: Bars</p>

        <div className="badge badge-success">In Stock</div>

        <p className="mt-4 text-gray-700">
          A high-protein bar made with real ingredients and no added sugar. Perfect for pre/post
          workout or anytime snacking. Loaded with fiber and 20g protein per serving.
        </p>

        <div className="text-2xl font-semibold text-primary mt-4">₹249</div>

        <div className="flex gap-4 mt-6">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-outline bg-secondary text-accent btn-secondary">Add to Cart</button>
        </div>

        <hr className="my-6" />

        <div>
          <h2 className="text-xl font-semibold mb-2">Nutritional Info</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Protein: 20g</li>
            <li>Fiber: 5g</li>
            <li>Sugar: 0g added</li>
            <li>Calories: 230 kcal</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
          <p className="text-gray-600 italic">⭐️⭐️⭐️⭐️⭐️ “Tastes amazing and super healthy!”</p>
        </div>

        <div className="h-32" /> {/* Extra space for smooth scroll */}
      </div>
    </div>
  );
};

export default SingleProductPage;
