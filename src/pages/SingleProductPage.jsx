
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";


const allProducts = [
  { id: 1, name: "Chocolate Protein Bar", category: "Bars", image: "./src/assets/All bars.png", price: 100, description: "A high-protein bar made with real ingredients and no added sugar. Perfect for pre/post workout or anytime snacking. Loaded with fiber and 20g protein per serving.",
    images: [
      "./src/assets/All bars.png",
      "./src/assets/All bars.png",
      "./src/assets/Orange_energy_bar.webp",
      "./src/assets/Hero pack.png",
    ],
   },

  { id: 2, name: "Chocolate Protein Bar", category: "Bars", image: "./src/assets/All bars.png", price: 100, description: "A high-protein bar made with real ingredients and no added sugar. Perfect for pre/post workout or anytime snacking. Loaded with fiber and 20g protein per serving.",
    images: [
      "./src/assets/All bars.png",
      "./src/assets/All bars.png",
      "./src/assets/Orange_energy_bar.webp",
      "./src/assets/Hero pack.png",
    ],
   },

  { id: 3, name: "Chocolate Protein Bar", category: "Bars", image: "./src/assets/Orange_energy_bar.webp", price: 100, description: "A high-protein bar made with real ingredients and no added sugar. Perfect for pre/post workout or anytime snacking. Loaded with fiber and 20g protein per serving.",
    images: [
      "./src/assets/All bars.png",
      "./src/assets/All bars.png",
      "./src/assets/Orange_energy_bar.webp",
      "./src/assets/Hero pack.png",
    ],
   },

  { id: 4, name: "Chocolate Protein Bar", category: "Bars", image: "./src/assets/Hero pack.png", price: 100, description: "A high-protein bar made with real ingredients and no added sugar. Perfect for pre/post workout or anytime snacking. Loaded with fiber and 20g protein per serving.",
    images: [
      "./src/assets/All bars.png",
      "./src/assets/All bars.png",
      "./src/assets/Orange_energy_bar.webp",
      "./src/assets/Hero pack.png",
    ],
   },
];

const SingleProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden pt-16 scroll-smooth">
      {/* Left fixed carousel panel */}
      <div className="md:w-1/2 bg-base-200 p-6 md:sticky top-0 h-[300px] md:h-screen flex justify-center items-center select-none">
        {/* <div className="w-full max-w-sm h-full "> */}
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="h-full"
          >
            {product.images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full max-h-[475px] object-cover border border-base-300 rounded-xl bg-base-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        {/* </div> */}
      </div>

      {/* Right scrollable details */}
      <div className="md:w-1/2 overflow-y-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-600">Category: {product.category}</p>

        <div className="badge badge-success">In Stock</div>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        <div className="text-2xl font-semibold text-primary mt-4">₹{product.price}</div>

        <div className="flex gap-4 mt-6">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-outline bg-secondary text-accent btn-secondary">
            Add to Cart
          </button>
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
          <p className="text-gray-600 italic">
            ⭐️⭐️⭐️⭐️⭐️ “Tastes amazing and super healthy!”
          </p>
        </div>

        <div className="h-32" /> {/* Extra space for scroll */}
      </div>
    </div>
  );
};

export default SingleProductPage;

