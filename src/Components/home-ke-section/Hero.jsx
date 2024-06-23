import video1 from "../../assets/Harry potter theme img/video1.mp4"
import video2 from "../../assets/myimages/bgvideo.mp4"

import cloud1 from "../../assets/myimages/cloud1.webp"
import cloud2 from "../../assets/myimages/cloud2.webp"
import cloud3 from "../../assets/myimages/cloud3.webp"
import cloud4 from "../../assets/myimages/cloud4.webp"
import cloud5 from "../../assets/myimages/cloud5.webp"
import cloud6 from "../../assets/myimages/cloud6.webp"
import { useEffect, useRef } from "react";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);


const Hero = () => {


  const main = useRef();


  // Define individual movement factors for each cloud
  const cloudMovementFactors = {
    cloud1: 10, // Movement factor for cloud 1
    cloud2: 20, // Movement factor for cloud 2
    cloud3: 40, // Movement factor for cloud 3
    cloud4: 62, // Movement factor for cloud 4
    cloud5: 80, // Movement factor for cloud 5
    cloud6: 100, // Movement factor for cloud 6

    textH: 45,
    cloud7: 15, // Movement factor for cloud 6
    cloud8: 25, // Movement factor for cloud 6
    cloud9: 25, // Movement factor for cloud 6

  };


  // Throttle function to limit the rate of function execution
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };



  // Parallax function with different speeds for each cloud
  const handleParallax = (e) => {
    const container = main.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width;
    const mouseY = (e.clientY - top) / height;

    const clouds = container.querySelectorAll(".cloud");
    clouds.forEach((cloud) => {
      const cloudId = cloud.getAttribute("id");
      const movementFactor = cloudMovementFactors[cloudId] || 10; // Default movement factor
      const translateX = (mouseX - 0.5) * movementFactor; // Horizontal movement
      const translateY = (mouseY - 0.5) * movementFactor; // Vertical movement

      gsap.to(cloud, {
        x: translateX,
        y: translateY,
        duration: 0.5, // Smooth transition
        ease: "power1.out", // Easing function for smoothness
      });
    });
  };

  

  useEffect(() => {
    const container = main.current;
    const throttledParallax = throttle(handleParallax, 100); // Throttle the function with a 100ms limit
    container.addEventListener("mousemove", throttledParallax); // Add event listener for mousemove

    return () => {
      container.removeEventListener("mousemove", throttledParallax); // Clean up event listener on unmount
    };
  }, []); // Only run once when component is mounted






  useGSAP(() => {
    var tlhero = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top",
        end: "300% bottom",
        scrub: 3,
        pin: true,
      },
    });

    tlhero.fromTo(
      "#bgvideo",
      { scale: 1.4, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power1.out" },
      "cloudAnimation"
    );

    // Optimize cloud animations
    ["#cloud1", "#cloud2", "#cloud3", "#cloud4", "#cloud5", "#cloud6", "#cloud7", "#cloud8", "#cloud9"].forEach((cloud, index) => {
      tlhero.to(cloud, {
        scale: 1.5 + index * 0.4,
        duration: 6 - index,
        rotate: `${index * 5}deg`,
        opacity: 0
      }, "cloudAnimation");
    });

    tlhero.from("#textH, #textHb", {
      duration: 3,
      opacity: 0.7,
    }, "cloudAnimation");

    tlhero.to("#textH, #textHb", {
      scale: 3,
      opacity: 0,
      duration: 5,
      delay: -3,
      
    }, "cloudAnimation2");

    tlhero.to("#bgvideo2", {
      opacity: 0,
      duration: 5,
    }, "cloudAnimation");
  }, { scope: main });




   

  return (
    <>
      <div className="h-[300vh]">

        <div ref={main} id="Hero-main" className=" overflow-hidden h-screen   " >
          <div>
            <video id="bgvideo" autoPlay loop muted className='z-[-10] w-full h-full flex absolute left-0 top-0 object-cover '>
              <source src={video1} type='video/mp4' />
            </video>
          </div>
          <video id="bgvideo2" autoPlay muted loop className=" z-[-0] w-full absolute left-0 top-0 h-full  object-cover flex     max-[900px]:h-[210%] max-[500px]:h-[240%] opacity-[0.3] " >
            <source src={video2} type="video/mp4" />
          </video>

          <div id="clouds" className="   relative h-full w-full" >

            <div id="cloud1" className=" cloud absolute  top-[-25%] left-[-20%] z-[-9]  w-[80vmax] tablet:w-[100vmax] tablet:top-[-15%] -rotate-[15deg] object-cover "  >
              <img src={cloud1} className=" h-full w-full " alt="" />
            </div>


            <div id="cloud2" className="z-[-6] cloud absolute  top-[-35%] right-[-15%]   w-[80vmax] tablet:w-[100vmax] tablet:top-[40%] tablet:right-[-30%] rotate-[45deg] object-cover "  >
              <img src={cloud2} className=" h-full w-full " alt="" />

            </div>


            <div className="flex justify-center items-center  h-screen   " >

              <h1 id="textHb" className=" absolute text-gray-900  cloud    z-[-6] text-[15vmax]   harry leading-none text-center"

              >
                Wellcome To Creativity
              </h1>
              <h1 id="textH" className=" cloud    z-[-6] text-[15vmax]   harry leading-none text-center"

              >
                Wellcome To Creativity
              </h1>
            </div>


            <div id="cloud3" className=" z-[-4] cloud absolute  top-[25%] right-[10%]    w-[70vmax] tablet:w-[90vmax] tablet:left-[-10] rotate-[-2deg] object-cover "  >
              <img src={cloud3} className=" h-full w-full " alt="" />

            </div>
            <div id="cloud4" className="z-[-3] cloud absolute  top-[25%] left-[-10%]    w-[80vmax] rotate-[-30deg] object-cover  "  >
              <img src={cloud4} className=" h-full w-full " alt="" />

            </div>
            <div id="cloud5" className=" z-[-2] cloud absolute  top-[25%] right-[10%]    w-[60vmax] rotate-[20deg] object-cover  "  >
              <img src={cloud5} className=" h-full w-full " alt="" />

            </div>

            <div id="cloud6" className=" z-[-1] cloud absolute  bottom-[-20%] left-[-30%]   w-[80vmax] rotate-0 object-cover  "  >
              <img src={cloud6} className=" h-full w-full " alt="" />

            </div>

            {/* sm */}
            <div id="cloud7" className=" cloud absolute  top-[25%] right-[50%] z-[-7]  w-[20%] rotate-[20deg] object-cover  "  >
              <img src={cloud5} className=" h-full w-full " alt="" />

            </div>

            <div id="cloud8" className=" cloud absolute  top-[5%] right-[0%] z-[-9]  w-[20%] rotate-[-30deg] object-cover  "  >
              <img src={cloud4} className=" h-full w-full " alt="" />

            </div>

            <div id="cloud9" className=" z-[-8] cloud absolute  top-[-10%] tablet:top-1 left-[0%]    w-[30vmax] rotate-[5deg] object-cover "  >
              <img src={cloud2} className=" h-full w-full " alt="" />

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero