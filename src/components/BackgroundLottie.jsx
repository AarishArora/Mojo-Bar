import Lottie from "lottie-react";
import animationData from "../assets/Starry Background.json"; // or just "../Starry Background.json" if inside src

const BackgroundLottie = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 opacity-40">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "150vw", height: "150vh" }}
      />
    </div>
  );
};

export default BackgroundLottie;
