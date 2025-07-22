import React, { useState } from "react";

// Dummy product data
const allProducts = [
  { id: 1, name: "Chocolate Protein Bar", category: "Bars", image: "/assets/bar1.png" },
  { id: 2, name: "Peanut Butter Protein Bar", category: "Bars", image: "/assets/bar2.png" },
  { id: 3, name: "Oats Cookies", category: "Cookies", image: "/assets/cookie1.png" },
  { id: 4, name: "Choco Chip Cookies", category: "Cookies", image: "/assets/cookie2.png" },
  { id: 5, name: "Classic Peanut Butter", category: "Peanut Butter", image: "/assets/pb1.png" },
  { id: 6, name: "Crunchy Peanut Butter", category: "Peanut Butter", image: "/assets/pb2.png" },
];

// Unique categories
const categories = ["All", "Bars", "Cookies", "Peanut Butter"];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  return (
    <div className="p-6 max-w-7xl mx-auto pt-28">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      {/* Category Tabs */}
      <div role="tablist" className="tabs tabs-boxed justify-center mb-8 flex-wrap">
        {categories.map((category) => (
          <a
            key={category}
            role="tab"
            className={`tab ${activeCategory === category ? "tab-active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </a>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="card-actions mt-3">
                <button className="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No product message */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No products found in this category.</div>
      )}
    </div>
  );
};

export default ProductPage;
