import React from 'react'


const Best_Seller = () => {

  const products = [
    { name: "Orange Dark Chocolate Energy Bar", img: "./src/assets/Hero bar.webp  ", link: "/product/4" },
    { name: "Turkish Hazelnut Protein Bomb", img: "./src/assets/Hero pack.webp", link: "/product/11" },
    { name: "Choco Peanut Butter Energy Bar", img: "./src/assets/peanut_bar_png.webp", link: "/product/8" },
  ];
  
  return (
    // <div className="relative w-full h-[80vh] overflow-hidden mb-5">
      
    // </div>
    <section className="relative py-20 bg-base-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Bestsellers</h2>
      <div className="flex flex-wrap justify-center gap-10  ">
        {products.map((item, idx) => (
          <a href={item.link}>
          <div key={idx} className="bg-gradient-to-b from-primary to-secondary shadow-xl  rounded-xl w-60 max-h-[300px] hover:scale-105 transition-all z-10 hover:shadow-[0_0_25px_#10b981]">
            <img src={item.img} alt={item.name} className="w-full max-h-[200px] h-full object-contain" />
            <h3 className="mt-4 text-lg font-semibold text-black pb-2">{item.name}</h3>
          </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Best_Seller