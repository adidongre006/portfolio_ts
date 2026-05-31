"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import OrbitCarousel from "@/components/ui/OrbitingCarousel";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import PixelBlast from "@/Background/PixelBlast";

const PixelHero = () => {
  return (
    <>
      <div className=" h-screen relative overflow-hidden bg-black-100 w-full">
        {/* {/_ Pixel Blasts bits background _/} */}

        <div className="absolute inset-0 z-[-1]  ">
          <PixelBlast
            variant="circle"
            pixelSize={3.5}
            color="#0000ff"
            patternScale={1}
            patternDensity={2}
            pixelSizeJitter={1}
            enableRipples
            rippleSpeed={1}
            rippleThickness={10}
            rippleIntensityScale={100}
            liquid={false}
            liquidStrength={5.12}
            liquidRadius={5}
            liquidWobbleSpeed={7}
            speed={7}
            edgeFade={0.01}
            transparent
          />
        </div>

        <div className=" relative z-10 text-white p-1  pointer-events-none h-full ">
          {/* <h1 className="text-7xl font-bold ">hello hello </h1> */}

          <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
            <div className=" w-full">
              
              <Hero />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PixelHero;
