import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Loading.json";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-base-100 z-[9999] flex items-center justify-center opacity-100 overflow-hidden scrollbar-hide">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
}
