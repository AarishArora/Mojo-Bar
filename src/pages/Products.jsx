import React from 'react'

const Products = () => {
  return (
    <>
    <div className='container mx-auto w-full h-full text-center'>
    <h2 className="text-4xl font-bold mb-10">Our Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="./src/assets/protein_bar.png"
                alt="Shoes" />
            </figure>
            <div className="card-body glass">
              <h2 className="card-title">Max Protein Bar</h2>
              <p className='text-start'>These bars are loaded with 10g, 20g & 30g of protein and come in flavors you'll actually look forward to.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="./src/assets/Granola.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Granola</h2>
              <p className='text-start'>Fuel your mornings with our high-protein, high-fiber granola. Add milk, yogurt, or eat it as is.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="./src/assets/chips.png"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Protein Chips</h2>
              <p className='text-start'>Crunchy, satisfying, and nothing like your usual greasy chips. It's full of protein. Snack without guilt.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
        </div>
        </div>
        
    </div>
    <div className='container mx-auto w-full h-full py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="./src/assets/Whey_protein.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Whey Protein</h2>
              <p className='text-start'>Whey protein is a great way to boost your protein intake and support your muscle growth and recovery.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="./src/assets/Plant_protein.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Plant Protein</h2>
              <p className='text-start'>Plant Proteins are a good source of natural and vegan protein but aren’t palatable in taste.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img
                src="./src/assets/cookie.png"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Protein Cookies</h2>
              <p className='text-start'>Soft, chewy, and sweet without the sugar overload, perfect for sweet cravings and support your fitness goals.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Products