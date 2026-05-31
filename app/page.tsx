"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import OrbitCarousel from "@/components/ui/OrbitingCarousel";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import PixelBlast from "@/Background/PixelBlast";
import PixelHero from "@/Background/PixelHero";
import ContactSection from "@/components/ContactSection";
import GridGlobe from "@/components/ui/GridGlobe";
import ContactScss from "@/components/contact/Contact"

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col sm:px-10">
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        {/* <Hero /> */}
        <PixelHero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <OrbitCarousel /> */}
        <div className="">
          <HorizontalScroll />
        </div>
        <Experience />

        <Approach />
        {/* <Clients/> */}

        {/* <ContactSection/> */}
        <ContactScss />

        <Footer />


        {/* <div className="flex h-[100%] w-[700px] m-auto p-4 items-center justify-center flex-col relative ">
          <GridGlobe />
        </div> */}
      </div>
    </main>
  );
};

export default Home;
