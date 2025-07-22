import React from 'react'


const Best_Seller = () => {

  const products = [
    { name: "Easy Combo of 12 Energy Bars", img: "./src/assets/bar box 1.png" },
    { name: "Peanut Butter", img: "/assets/bar2.png" },
    { name: "Oats", img: "/assets/bar3.png" },
  ];
  
  return (
    // <div className="relative w-full h-[80vh] overflow-hidden mb-5">
      
    // </div>
    <section className="relative py-20 bg-base-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Bestsellers</h2>
      <div className="flex flex-wrap justify-center gap-10 ">
        {products.map((item, idx) => (
          <div key={idx} className="bg-yellow-500 shadow-xl  rounded-xl w-60 hover:scale-105 transition-all z-10">
            <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Best_Seller