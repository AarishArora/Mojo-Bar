import { motion, AnimatePresence } from "framer-motion";
import InfiniteScrollText from "../components/InfiniteScrollText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Best_Seller from "../components/Best_Seller";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import proteinBar from "/images/Hero bar.webp";
import ScrollRevealProducts from "../components/ScrollRevealProducts";
import BackgroundLottie from "../components/BackgroundLottie";

const heroContent = [
  {
    image: "/images/Hero bar.webp",
    spanText: "Energy Bars...",
    spanColor: "text-primary",
    btnShadow: "hover:shadow-[0_0_25px_#f59e0b]",
    link: "/product/4",
  },
  {
    image: "/images/Hero pack.webp",
    spanText: "Protein Bomb!",
    spanColor: "text-secondary",
    btnShadow: "hover:shadow-[0_0_25px_#9333ea]",
    link: "/product/11",
  },
  {
    image: "/images/Hero dark.webp",
    spanText: "Mint Chocolate!",
    spanColor: "text-accent",
    btnShadow: "hover:shadow-[0_0_25px_#10b981]",
    link: "/product/13",
  },
];

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

const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // Change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = heroContent[index];

  const [showImage, setShowImage] = useState(false);
  const animationRef = useRef(null);

  // Trigger image show after bomb animation
  useEffect(() => {
    setShowImage(false); // Reset image before new bomb
  }, [index]);

  const handleBombComplete = () => {
    setShowImage(true); // Show image after bomb animation
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
      <section className="relative overflow-hidden min-h-screen bg-base-100 flex flex-col md:flex-row items-center justify-between px-10 pt-18 md:pt-25 scroll-smooth ">
        <InfiniteScrollText />
        <BackgroundLottie />

        <div className="mr-4 block w-[225px] md:w-[300px] -rotate-3 ">
        
          <AnimatePresence mode="wait">
            <motion.div
              className="mt-10 md:mt-0 relative"
              key={current.image}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={current.image}
                alt="Mojo Product"
                className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover"
                whileHover={{
                  rotate: [0, -20, 20, -10, 10, 0], // Shaking motion
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              />
              
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-xl z-10 ">
          <h1 className="text-5xl font-bold leading-tight text-stroke2">
            Snack smart 
            <br />
            With{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={current.spanText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className={current.spanColor}
              >
                {current.spanText}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="mt-6 text-lg text-gray-500">
            India’s leading protein snack brand with delicious flavours &
            powerful nutrition.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`btn btn-primary mt-8 shadow-[0_0_10px_rgba(0,0,0,0.2)] ${current.btnShadow} transition-shadow`}
            onClick={() => navigate(current.link)}
          >
            Explore Product
          </motion.button>
        </div>
      </section>

      <div className="bg-base-100 py-16 px-16 md:px-20 text-white md:mx-10">
        <hr className="my-10 mt-20 border-white px-16" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          {[
            {
              title: "Best price",
              desc: "Guaranteed the best price on the market, significantly increasing revenue.",
            },
            {
              title: "Efficiency",
              desc: "Facilities allow up to 5,000,000 products/month production.",
            },
            {
              title: "Reliability",
              desc: "Certified production as per federal network requirements.",
            },
            {
              title: "Range",
              desc: "products for all price segments with unique recipes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className=" p-4 rounded-xl shadow-md  hover:scale-105 transition-all"
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-white">{item.desc}</p>
            </div>
          ))}
        </motion.div>
        <hr className="my-10 mb-20 border-white px-16" />

        <Best_Seller />
        <div className="mt-20 ">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white"
          >
            Our Categories
          </motion.h2>

          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold text-xl mb-2">
              Eat Healthy
            </p>
            <p className="text-white max-w-2xl mx-auto text-sm">
              Healthy product for sport nutrition that helps maintain normal
              protein and carb levels. Includes collagen and prebiotics for
              proper recovery.
            </p>
          </div>

          <ScrollRevealProducts />
        </div>
      </div>
      <section className="bg-base-200 py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What do we stand for?
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed md:px-10">
          When the world was busy making unhealthy snacking seem healthy, we decided to swim against the tide. We quit our jobs to create a smarter, better-for-you snack packed with research, not junk.
            <br className="hidden md:block" />
            We keep it clean, we keep it honest, and we make nutrition fun!
          </p>
        </div>
      </section>

      <Footer />
      </motion.div>
    </>
  );
};

export default Home;
