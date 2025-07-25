import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import AllBars1 from "/src/assets/All bars_3d.webp";
import AllBars2 from "/src/assets/Set6_hover.webp";
import AllBars3 from "/src/assets/All_bars_side.webp";
import BarPack1 from "/src/assets/Combo_bar_pack6.webp";
import BarPack2 from "/src/assets/Bar_combo_hover.webp";
import BarPack3 from "/src/assets/Combo_bar_hover.webp";
import ChocoBar1 from "/src/assets/bar box 1.webp";
import ChocoBar2 from "/src/assets/Choco_bar_side.webp";
import ChocoBar3 from "/src/assets/Choco_bar_back.webp";
import OrangeBar1 from "/src/assets/OrangeDarkChocolate_pack.webp";
import OrangeBar2 from "/src/assets/Orange_bar_back.webp";
import OrangeBar3 from "/src/assets/Orange_bar_side.webp";
import PinkBar1 from "/src/assets/Pink_pack.webp";
import PinkBar2 from "/src/assets/Pink_bar_pack_side.webp";
import PinkBar3 from "/src/assets/Pink_bar_back.webp";
import YellowBar1 from "/src/assets/Yellow_pack.webp";
import YellowBar2 from "/src/assets/Yellow_bar.webp";
import YellowBar3 from "/src/assets/Yellow_pack_hover.webp";
import PeanutBar1 from "/src/assets/peanut_bar_png.webp";
import PeanutBar2 from "/src/assets/Peanut_bar_ing.webp";
import PeanutBar3 from "/src/assets/peanut_bar_hover.webp";
import YoghurtBar1 from "/src/assets/Yoghurt_bar_png.webp";
import YoghurtBar2 from "/src/assets/Yoghurt_bar_ing.webp";
import YoghurtBar3 from "/src/assets/Yoghurt_bar_hover.webp";

import BombPack1 from "/src/assets/Protein_bomb3d.webp";
import BombPack2 from "/src/assets/Protein_bomb3_hover.webp";
import BombPack3 from "/src/assets/Bomb Pack2.webp";
import OrangeBomb1 from "/src/assets/Protein_bomb_orange_3d.webp";
import OrangeBomb2 from "/src/assets/Protein_bomb_orange_hover.webp";
import OrangeBomb3 from "/src/assets/Why_bomb_orange.webp";
import GreenBomb1 from "/src/assets/Protein_bomb_green_3d.webp";
import GreenBomb2 from "/src/assets/Protein_bomb_green_hover.webp";
import GreenBomb3 from "/src/assets/Why_bomb_green.webp";
import PurpleBomb1 from "/src/assets/Hero pack.webp";
import PurpleBomb2 from "/src/assets/Protein_bomb_hover.webp";
import PurpleBomb3 from "/src/assets/Why_bomb_purple.webp";

import Sattu1 from "/src/assets/Sattu_3d.webp";
import Sattu2 from "/src/assets/Sattu_back.webp";
import Sattu3 from "/src/assets/Sattu_hover.webp";

import MintThin1 from "/src/assets/Hero dark.webp";
import MintThin2 from "/src/assets/Mint_thins_hover.webp";
import MintThin3 from "/src/assets/Why_mojo_thins.webp";
import MintSF1 from "/src/assets/Mint_SF_3d.webp";
import MintSF2 from "/src/assets/Sugar_free_thins_hover.webp";
import MintSF3 from "/src/assets/Why_mojo_thins.webp";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const allProducts = [
  {
    id: 1,
    name: "Easy Combo of 12 Energy bars (Choco Almond, Fruit & Nut, Yoghurt Berry & Orange Dark Chocolate), 384g",
    category: "Bars",
    image: { AllBars1 },
    price: 580.0,
    description:
      "MOJO Bar is a Protein & Fibre Rich SMART snack for the calorie conscious.",
    images: [AllBars1, AllBars2, AllBars3],
  },

  {
    id: 2,
    name: "Assorted Pack of 6, 192g (Choco Almond, Yoghurt Berry & Nutty Apricot)",
    category: "Bars",
    image: { BarPack1 },
    price: 300.0,
    description:
      "Choco Almond + Protein - The classic combination of chocolate and almond has stood the test of time. These two have been innovated and experimented with through the years and have always\n \nNutty Apricot + Fibre - Whether in school, in college or at work, one thing that we're all familiar with is the little box of dry fruits that is a part of all packed lunches.\n\nYoghurt Berry + Anti-Oxidants - As Indians (whose mothers strongly believe that ‘Dahi’ is the solution to most things) we have grown up with yoghurt and developed a special relationship with it. It’s our go-to comfort food and of course very healthy.",
    images: [BarPack1, BarPack2, BarPack3],
  },

  {
    id: 3,
    name: "Choco Almond + Protein, 480g (Pack Of 15)",
    category: "Bars",
    image: { ChocoBar1 },
    price: 719.0,
    description:
      "The classic combination of chocolate and almond has stood the test of time. These two have been innovated and experimented with through the years and have always complimented each other perfectly! We decided to get on to the innovation bandwagon and set out to create something that excited both, the chocoholic as well as the more disciplined side of you. Using rich dark chocolate, some delicious dates and perfect little peanuts, we gave this classic duo our own Mojo spin, to create a snack bar that is rich yet healthy, nutty yet light and familiar yet nuanced.",
    images: [ChocoBar1, ChocoBar2, ChocoBar3],
  },

  {
    id: 4,
    name: "Orange Dark Chocolate + Vitamin C (Pack of 15), 480g",
    category: "Bars",
    image: { OrangeBar1 },
    price: 719.0,
    description:
      "Dark chocolate is often considered the most versatile of the chocolates which can result into an amazing contrast with tangy foods and bolder flavors. A freshly peeled orange, on the other hand, evokes the fresh smells of springtime or simply a refreshing breakfast in a sunny kitchen corner. The same reactions were revealed when we presented our idea of having a combination of orange and chocolate with a healthy and smart twist to the world.  Many people who love this combination cannot often have it. So we have ensured that you don’t have to give up on your favorite combination because of a decision to follow a healthy and conscious living. Indulge yourself in our latest offering - Orange Dark Chocolate + Vitamin C. The richness of dark chocolate coupled with a fresh citrus kick loaded with Vitamin C!",
    images: [OrangeBar1, OrangeBar2, OrangeBar3],
  },
  {
    id: 5,
    name: "Fruit & Nut + Fibre Energy Bar (Pack of 15), 480g",
    category: "Bars",
    image: { YellowBar1 },
    price: 719.0,
    description:
      "Whether in school, in college or at work, one thing that we're all familiar with is the little box of dry fruits that is a part of all packed lunches. We thought there had to be a more convenient way of eating those nuts rather than in a messy mix in a little box. Thus the experimentation began! We played around with a whole bunch of different combinations until we found the ideal blend of nuts and apricots with raisins, black currents and watermelon seeds. The outcome was this deliciously chewy bar, with sporadic spurts of crunch that has the perfect balance between the rich flavor of the nuts and the added punch from the fruits.",
    images: [YellowBar1, YellowBar2, YellowBar3],
  },
  {
    id: 6,
    name: "Yoghurt Berry Anti Oxidant (Pack of 15), 480g",
    category: "Bars",
    image: { PinkBar1 },
    price: 719.0,
    description:
      "As Indians (whose mothers strongly believe that ‘Dahi’ is the solution to most things) we have grown up with yoghurt and developed a special relationship with it. It’s our go-to comfort food and of course very healthy. Having realized that this is such an integral part of so many homes, we decided to tip our hats to it. Combining it with cranberries and cereal and mixing in almonds and watermelon seeds for some added crunch, we have perfected the balance between the sweet and the sour. While the bar retains the signature tangy-ness of the yoghurt and cranberries, there’s just the right amount of sweet from the honey to balance it out!",
    images: [PinkBar1, PinkBar2, PinkBar3],
  },
  {
    id: 7,
    name: "Yoghurt BlueBerry Anti Oxidant (Pack of 15), 480g",
    category: "Bars",
    image: { YoghurtBar1 },
    price: 749.0,
    description:
      "As Indians (whose mothers strongly believe that ‘Dahi’ is the solution to most things) we have grown up with yoghurt and developed a special relationship with it. It’s our go-to comfort food and of course very healthy. Having realized that this is such an integral part of so many homes, we decided to tip our hats to it. Combining it with cranberries and cereal and mixing in almonds and watermelon seeds for some added crunch, we have perfected the balance between the sweet and the sour. While the bar retains the signature tangy-ness of the yoghurt and cranberries, there’s just the right amount of sweet from the honey to balance it out!",
    images: [YoghurtBar1, YoghurtBar2, YoghurtBar3],
  },
  {
    id: 8,
    name: "Choco Peanut Butter + 5 gm Protein (Pack of 15), 480g",
    category: "Bars",
    image: { PeanutBar1 },
    price: 719.0,
    description:
      "The classic combination of chocolate and almond has stood the test of time. These two have been innovated and experimented with through the years and have always complimented each other perfectly! We decided to get on to the innovation bandwagon and set out to create something that excited both, the chocoholic as well as the more disciplined side of you. Using rich dark chocolate, some delicious dates and perfect little peanuts, we gave this classic duo our own Mojo spin, to create a snack bar that is rich yet healthy, nutty yet light and familiar yet nuanced.",
    images: [PeanutBar1, PeanutBar2, PeanutBar3],
  },

  {
    id: 9,
    name: "Protein Bombs Variety Pack - Peanut Butter, Hazelnut and Mocha (10g Protein), 240g - Pack of 6 | Vegan | Gluten Free",
    category: "Protein Bomb",
    image: { BombPack1 },
    price: 399.0,
    description:
      "Handmade Protein Bombs with Vegan and Gluten-Free Natural Ingredients to provide 10 grams of Protein per Serving. It's your pop-able breakfast everyday, sweet indulgence for the health conscious or drop into your workout shake smoothie.\nEvery serving consists of 12-40g Protein Bombs (4 - Creamy Peanut Butter Bombs,  4 - Intense Mocha Bombs, 4 of Hazelnut Bombs)",
    images: [BombPack1, BombPack2, BombPack3],
  },
  {
    id: 10,
    name: "Protein Bombs - Creamy Peanut Butter (10g Protein), 200g - Pack of 5 | Vegan | Gluten Free",
    category: "Protein Bomb",
    image: { GreenBomb1 },
    price: 339.0,
    description:
      "Handmade Protein Bombs with Vegan and Gluten-Free Natural Ingredients to provide 10 grams of Protein per Serving. It's your pop-able breakfast everyday, sweet indulgence for the health conscious or drop into your workout shake smoothie.\nEvery serving consists of 2-20g Protein Bombs. Total of 10 bombs in each pack.",
    images: [GreenBomb1, GreenBomb2, GreenBomb3],
  },
  {
    id: 11,
    name: "Protein Bombs - Turkish Hazelnut (10g Protein), 200g - Pack of 5 | Vegan | Gluten Free",
    category: "Protein Bomb",
    image: { PurpleBomb1 },
    price: 339.0,
    description:
      "Handmade Protein Bombs with Vegan and Gluten-Free Natural Ingredients to provide 10g of Protein. It's your pop-able breakfast everyday, sweet indulgence for the health conscious or drop into your workout shake smoothie.\nEvery serving consists of 2-20g Protein Bombs. Total of 10 bombs in each pack.",
    images: [PurpleBomb1, PurpleBomb2, PurpleBomb3],
  },
  {
    id: 12,
    name: "Protein Bombs - Intense Mocha (10g Protein), 200g - Pack of 5 | Vegan | Gluten Free",
    category: "Protein Bomb",
    image: { OrangeBomb1 },
    price: 339.0,
    description:
      "Handmade Protein Bombs with Vegan and Gluten-Free Natural Ingredients to provide High Protein. It's your pop-able breakfast everyday, sweet indulgence for the health conscious or drop into your workout shake smoothie.\nEvery serving consists of 2-20g Protein Bombs. Total of 10 bombs in each pack.",
    images: [OrangeBomb1, OrangeBomb2, OrangeBomb3],
  },

  {
    id: 13,
    name: "Mildly Dark Chocolate Mint with Quinoa Crisps, 108g",
    category: "Dark Chocolate Thins",
    image: { MintThin1 },
    price: 239.0,
    description:
      "Mojo Thins are a mindful way to snack on delectable dark chocolate paired with real, simple ingredients for a sinful experience.\nEvery box contains 9 pieces of dark chocolate slivers.",
    images: [MintThin1, MintThin2, MintThin3],
  },
  {
    id: 14,
    name: "Sugar Free 45% Dark Chocolate Mint Thins (5 pieces), 75 gms - Zero Sugar",
    category: "Dark Chocolate Thins",
    image: { MintSF1 },
    price: 240.0,
    description:
      "Mojo Thins are a mindful way to snack on delectable dark chocolate paired with real, simple ingredients for a sinful experience.\nThis box contains 5 pieces of Sugar free Dark Chocolate Mint Thins.",
    images: [MintSF1, MintSF2, MintSF3],
  },
  {
    id: 15,
    name: "Mojo Bar Vegan Protein - 12G Savoury Protein with Super Foods, 300g | 100% Natural & Gluten Free",
    category: "Vegan Protein Powder",
    image: { Sattu1 },
    price: 579.0,
    description:
      "Are you tired of the same old sweet protein shakes? \n\nLooking for a delicious, nutritious alternative that caters to your savory cravings? Look no further! Say hello to MOJO Bar's Savoury Protein, the game-changer in the world of protein supplements.\n\nOur unique blend of Sattu, Moong Bean and Price Protein along with Super Foods like Moringa, Ashwagandha and Spirulina make this a perfect substitute to your existing protein shakes.\n\nAdd one scoop (serving size) of our Protein Powder in a glass of Butter milk to make a delicious 16g Savoury Protein Drink.",
    images: [Sattu1, Sattu2, Sattu3],
  },
];

const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0], // or however you're storing image
      quantity: quantity, // assume you have a `quantity` state
    };

    // Get existing cart from localStorage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const index = existingCart.findIndex((item) => item.id === cartItem.id);

    if (index > -1) {
      // If it exists, just update the quantity
      existingCart[index].quantity += cartItem.quantity;
    } else {
      // Otherwise, add it to cart
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Item added to cart!");
  };

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen w-full"
      >
        <Navbar />
        <div className="flex flex-col md:flex-row h-screen overflow-hidden pt-11 scroll-smooth">
          {/* Left fixed carousel panel */}
          {/* <div className="md:w-1/2 bg-base-100 p-6 md:sticky top-0 h-[300px] md:h-screen grid place-items-center select-none"> */}
          <div className="md:w-1/2 bg-base-100 p-6 md:sticky top-0 h-[50vh] md:h-screen grid place-items-center select-none">
            {/* <div className="w-full max-w-sm h-auto "> */}
            <div className="w-full max-w-xs sm:max-w-sm h-auto px-2">
              <Swiper
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={20}
                navigation
                modules={[Navigation]}
                className=" w-full"
              >
                {product.images.map((src, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={src}
                      alt={`Product ${index + 1}`}
                      className="w-full max-h-[300px] md:max-h-[475px] object-contain rounded-xl  bg-white"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right scrollable details */}
          <div className="md:w-1/2 overflow-y-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-600">
              Category: {product.category}
            </p>
            <div className="badge badge-success">In Stock</div>
            <p className="mt-4 text-gray-400">{product.description}</p>
            <div className="text-2xl font-semibold text-primary mt-4">
              ₹{product.price.toFixed(2)}
            </div>
            {/* Quantity Selector */}
            <div className="flex items-center gap-0.5 mt-6 justify-start">
              <button
                onClick={decrement}
                className="btn btn-outline btn-sm rounded-xl text-xl bg-white text-black"
              >
                -
              </button>
              <span className="text-lg font-medium bg-white px-4 py-0.5 rounded text-black">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="btn bg-white text-black btn-sm rounded-xl text-xl"
              >
                +
              </button>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="btn btn-primary">Buy Now</button>
              <button
                className="btn btn-outline bg-transparent hover:bg-accent text-white btn-secondary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
            <hr className="my-6" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Nutritional Info</h2>
              <ul className="list-disc ml-6 space-y-1 text-gray-400">
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
      </motion.div>
    </>
  );
};

export default SingleProductPage;
