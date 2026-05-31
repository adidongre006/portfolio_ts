<>
<div className="w-full h-screen relative overflow-hidden bg-black">
{/_ Pixel Blasts bits background _/}

        <div className="absolute inset-0 z-0  ">
          <PixelBlast
            variant="circle"
            pixelSize={3}
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
            liquidWobbleSpeed={10}
            speed={10}
            edgeFade={0.01}
            transparent
          />
        </div>

      <div className=" relative z-10 text-white p-1  pointer-events-none h-full">
        <h1 className="text-7xl font-bold ">hello hello </h1>

        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
       a
        <Hero />
        

      </div>
    </main>

      </div>
       </div>
    </>
