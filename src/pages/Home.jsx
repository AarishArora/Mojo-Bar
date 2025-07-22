
import { motion } from 'framer-motion';
import InfiniteScrollText from '../components/InfiniteScrollText';




const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-base-100 flex items-center justify-between px-10 pt-28">
      
      <InfiniteScrollText />
      <div className="hidden md:block w-[300px] -rotate-3 ml-2">
        {/* <img src="./src/assets/Hero bar.png" alt="Max Protein Jar" /> */}
        {/* <motion.img
          src="./src/assets/Hero bar.png"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        /> */}
        <motion.div
        className="mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="./src/assets/Hero bar.png"
          alt="Max Protein Jar"
          className="w-[300px] md:w-[400px]"
          whileHover={{
            rotate: [0, -20, 20, -10, 10, 0],  // Shaking motion
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        />
      </motion.div>
      </div>
      
      <div className="max-w-xl z-10 ">
        <h1 className="text-5xl font-bold leading-tight text-stroke2">Fuel Your Day<br />With <span className="text-primary">Energy Bars...</span></h1>
        <p className="mt-6 text-lg text-gray-600">India’s leading protein snack brand with delicious flavours & powerful nutrition.</p>
        <button className="btn btn-primary mt-8">Explore Products</button>
      </div>
      
    </section>
  );
};

export default Home;