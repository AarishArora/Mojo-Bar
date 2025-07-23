import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy product data
const allProducts = [
  { id: 1, name: "Easy Combo of 12 Energy bars (Choco Almond, Fruit & Nut, Yoghurt Berry & Orange Dark Chocolate), 384g", category: "Bars", image: "./src/assets/All bars.png", price: 580.00 },

  { id: 2, name: "Assorted Pack of 6, 192g (Choco Almond, Yoghurt Berry & Nutty Apricot)", category: "Bars", image: "./src/assets/Combo_bar_pack6.png", price: 300.00 },

  { id: 3, name: "Choco Almond + Protein, 480g (Pack Of 15)", category: "Bars", image: "./src/assets/bar box 1.png", price: 719.0 },

  { id: 4, name: "Orange Dark Chocolate + Vitamin C (Pack of 15), 480g", category: "Bars", image: "./src/assets/OrangeDarkChocolate_pack.png", price: 719.0 },

  { id: 5, name: "Fruit & Nut + Fibre Energy Bar (Pack of 15), 480g", category: "Bars", image: "./src/assets/Yellow_pack.png", price: 719.0 },

  { id: 6, name: "Yoghurt Berry Anti Oxidant (Pack of 15), 480g", category: "Bars", image: "./src/assets/Pink_pack.png", price: 719.0 },

  { id: 7, name: "Yoghurt BlueBerry Anti Oxidant (Pack of 15), 480g", category: "Bars", image: "./src/assets/Yoghurt_bar_png.png", price: 749.0 },

  { id: 8, name: "Choco Peanut Butter + 5 gm Protein (Pack of 15), 480g", category: "Bars", image: "./src/assets/peanut_bar_png.png", price: 719.0 },

  { id: 9, name: "Protein Bombs Variety Pack - Peanut Butter, Hazelnut and Mocha (10g Protein), 240g - Pack of 6 | Vegan | Gluten Free", category: "Protein Bomb", image: "./src/assets/Protein_bomb3.png", price: 399.0 },

  { id: 10, name: "Protein Bombs - Creamy Peanut Butter (10g Protein), 200g - Pack of 5 | Vegan | Gluten Free", category: "Protein Bomb", image: "./src/assets/Protein_bomb_green.png", price: 339.0 },

  { id: 11, name: "Protein Bombs - Turkish Hazelnut (10g Protein), 200g - Pack of 5 | Vegan | Gluten Free", category: "Protein Bomb", image: "./src/assets/Protein_bomb.png", price: 339.0 },

  { id: 12, name: "Protein Bombs - Intense Mocha (10g Protein), 200g - Pack of 5 | Vegan | Gluten Free", category: "Protein Bomb", image: "./src/assets/Protein_bomb_orange.png", price: 339.0},

  { id: 13, name: "Mildly Dark Chocolate Mint with Quinoa Crisps, 108g", category: "Dark Chocolate Thins", image: "./src/assets/Mildly_chocolate.png", price: 239.0},

  { id: 14, name: "Sugar Free 45% Dark Chocolate Mint Thins (5 pieces), 75 gms - Zero Sugar", category: "Dark Chocolate Thins", image: "./src/assets/Mint_SF.jpg", price: 240.0 },

  { id: 15, name: "Mojo Bar Vegan Protein - 12G Savoury Protein with Super Foods, 300g | 100% Natural & Gluten Free", category: "Vegan Protein Powder", image: "./src/assets/Sattu.png", price: 579.0 },

];

// Unique categories
const categories = ["All", "Bars", "Protein Bomb", "Dark Chocolate Thins", "Vegan Protein Powder"];
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
          <div key={product.id} className="card bg-neutral shadow-xl">
            <figure className="p-4 ">
              <div className="w-full h-48 object-contain">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain " />
              </div>

            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">₹{(product.price).toFixed(2)}</p>
              <div className="card-actions mt-3">
              <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
                View Product
              </Link>
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
