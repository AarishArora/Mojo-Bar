import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const productData = [
  {
    title: "Energy Bars",
    desc: "combines 100% whole grains, nutrient-dense nuts, and real fruit to deliver a balanced energy boost.",
    image: "./src/assets/Hero bar.png",
  },
  {
    title: "Protein Bombs",
    desc: "A sweet, guilt-free indulgence perfect for post-gym recovery or afternoon cravings.",
    image: "./src/assets/Hero pack.png",
  },
  {
    title: "Dark Chocolate Thin",
    desc: "With 45% cocoa and delicately infused with cool mint and crispy quinoa.",
    image: "./src/assets/Hero dark.png",
  },
  {
    title: "Vegan Protein Powder",
    desc: "A clean, plant-powered shake alternative",
    image: "./src/assets/Sattu_3d.png",
  },
];

export default function ScrollRevealProducts() {
  return (
    <div>
      {productData.map((product, index) => (
        <FullScreenSlide
          key={index}
          image={product.image}
          title={product.title}
          desc={product.desc}
        />
      ))}
    </div>
  );
}

function FullScreenSlide({ image, title, desc }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center justify-center bg-base-100 overflow-hidden"
    >
      <div className="flex w-4/5 items-center justify-center relative">
        {/* Animated Product Image */}
        <motion.img
          src={image}
          alt={title}
          initial={{ x: 0, opacity: 0 }}
          animate={inView ? { x: -200, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-56 h-86 md:w-72 object-contain z-10"
        />

        {/* Animated Product Details */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute left-1/2 md:left-[calc(50%+120px)] max-w-md px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-500 text-sm md:text-base">{desc}</p>
        </motion.div>
      </div>
    </section>
  );
}
