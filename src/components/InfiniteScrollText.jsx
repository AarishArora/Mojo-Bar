import React from "react";

const InfiniteScrollText = () => {
  return (
    <div className=" absolute top-[20%] md:top-[30%] inset-0 overflow-hidden pointer-events-none z-0">
      <div className="whitespace-nowrap scroll-inner text-[120px] font-bold text-transparent bg-clip-text opacity-10  select-none">
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Energy Bar</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Protein Bombs</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Dark Chocolate Thins</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Vegan Protein Powder</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Energy Bar</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Protein Bombs</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Dark Chocolate Thins</span>
        <span className="mr-20 bg-gradient-to-r from-primary to-secondary bg-clip-text">Vegan Protein Powder</span>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
