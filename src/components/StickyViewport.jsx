import MainHeadline from "./MainHeadline";
import MainVisuals from "./MainVisuals";
import NavigationBar from "./NavigationBar";
import Scrollbar from "./Scrollbar";
import Stats from "./Stats";

const StickyViewport = () => {
  return (
    <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">

      <NavigationBar />

      <div className="hero-label absolute left-5 top-24 text-[8px] tracking-[0.25em] text-white/50 sm:left-8 sm:top-32 sm:text-[10px] sm:tracking-[0.3em]">
        DIGITAL CREATIVE STUDIO
      </div>

      <MainHeadline />

      <MainVisuals />

      <Stats />

      <Scrollbar />
      
    </div>
  );
};

export default StickyViewport;
