import React from 'react'


const Best_Seller = () => {

  const products = [
    { name: "Orange Dark Chocolate + Vitamin C Energy Bar", img: "./src/assets/Hero bar.png" },
    { name: "Turkish Hazelnut Protein Bomb", img: "./src/assets/Hero pack.png" },
    { name: "Oats", img: "./src/assets/peanut_bar_png.png" },
  ];
  
  return (
    // <div className="relative w-full h-[80vh] overflow-hidden mb-5">
      
    // </div>
    <section className="relative py-20 bg-base-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Bestsellers</h2>
      <div className="flex flex-wrap justify-center gap-10 ">
        {products.map((item, idx) => (
          <div key={idx} className="bg-yellow-500 shadow-xl  rounded-xl w-60 max-h-[300px] hover:scale-105 transition-all z-10">
            <img src={item.img} alt={item.name} className="w-full max-h-[200px] h-full object-contain" />
            <h3 className="mt-4 text-lg font-semibold text-neutral">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Best_Seller