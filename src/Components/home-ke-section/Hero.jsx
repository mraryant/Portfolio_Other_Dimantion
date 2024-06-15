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
        duration: 0.3, // Smooth transition
        ease: "power1.out", // Easing function for smoothness
      });
    });
  };

  useEffect(() => {
    const container = main.current;
    container.addEventListener("mousemove", handleParallax); // Add event listener for mousemove

    return () => {
      container.removeEventListener("mousemove", handleParallax); // Clean up event listener on unmount
    };
  }, []); // Only run once when component is mounted





  useGSAP(() => {
    var tlhero = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top",
        end: "300% bottom",
        scrub: 5,
        pin: true,
        // markers: true,
        pinSpacing: true,
        toggleActions: "play none none none",
      },
    });

    tlhero.fromTo(
      "#bgvideo", // target element (ID selector)
      { scale: 1.4, opacity: 0 }, // starting state
      { scale: 1, opacity: 1, duration: 1, ease: "power1.out" }, // ending state
      "cloudAnimation"
    );



    tlhero.to("#cloud1   ", {
      scale: 1.5,
      duration: 6,
      rotate: "10deg",
      opacity: 0

    }, "cloudAnimation")

    tlhero.to("#cloud2   ", {
      scale: 1.8,
      duration: 5,
      rotate: "15deg",

      opacity: 0
    }, "cloudAnimation")

    tlhero.to("#cloud3   ", {
      scale: 2,
      duration: 4,
      rotate: "4deg",
      opacity: 0,

    }, "cloudAnimation")
    tlhero.to("#cloud4   ", {
      scale: 2,
      duration: 3,
      rotate: "0deg",
      opacity: 0,

    }, "cloudAnimation")

    tlhero.to("#cloud5   ", {
      scale: 2.5,
      duration: 2,
      rotate: "4deg",
      opacity: 0,

    }, "cloudAnimation")
    tlhero.to("#cloud6   ", {
      scale: 2.9,
      duration: 1,
      rotate: "4deg",
      opacity: 0,

    }, "cloudAnimation")

    // sm 

    tlhero.to("#cloud7   ", {
      scale: 2.9,
      duration: 2.2,
      rotate: "4deg",
      opacity: 0,

    }, "cloudAnimation")
    tlhero.to("#cloud8   ", {
      scale: 2.9,
      duration: 1.6,
      rotate: "4deg",
      opacity: 0,

    }, "cloudAnimation")
    tlhero.to("#cloud9   ", {
      scale: 2.9,
      duration: 4.6,
      rotate: "4deg",
      opacity: 0,

    }, "cloudAnimation")



    // Start both "from" animations
    tlhero.from("#textH", {
      duration: 3,
      opacity: 0.7,
    }, "cloudAnimation");

    tlhero.from("#textHb", {
      duration: 3,
      opacity: 0.7,
    }, "cloudAnimation");

    // Synchronize both "to" animations to start at the same time
    tlhero.to("#textH", {
      scale: 3,
      opacity: 0,
      duration: 5,
      delay: 2,
    }, "cloudAnimation");  // The position parameter

    tlhero.to("#textHb", {
      scale: 3,
      opacity: 0,
      duration: 5,
      delay: 2,
    }, "cloudAnimation");  // This ensures both animations start at the same time

    tlhero.to("#bgvideo2", {
      opacity: 0,
      duration: 5,
      
    }, "cloudAnimation"); // This ensures both animations start
  }, { scope: main })



  return (
    <>
      <div className="h-[300vh]">

        <div ref={main} id="Hero-main" className=" overflow-hidden h-screen w-screen " >
          <div>
            <video id="bgvideo" autoPlay loop muted className='z-[-10] w-full h-full flex absolute left-0 top-0 object-cover '>
              <source src={video1} type='video/mp4' />
            </video>
          </div>
          <video id="bgvideo2" autoPlay muted loop className=" z-[-0] w-screen absolute left-0 top-0 h-full  object-cover flex     max-[900px]:h-[210%] max-[500px]:h-[240%] opacity-[0.3] " >
            <source src={video2} type="video/mp4" />
          </video>

          <div id="clouds" className="   relative h-full w-full" >

            <div id="cloud1" className=" cloud absolute  top-[-25%] left-[-20%] z-[-9]  w-[80vmax] tablet:w-[100vmax] tablet:top-[-15%] -rotate-[15deg] object-cover "  >
              <img src={cloud1} className=" h-full w-full " alt="" />
            </div>


            <div id="cloud2" className="z-[-6] cloud absolute  top-[-35%] right-[-15%]   w-[80vmax] tablet:w-[100vmax] tablet:top-[40%] tablet:right-[-30%] rotate-[45deg] object-cover "  >
              <img src={cloud2} className=" h-full w-full " alt="" />

            </div>


            <div className="flex justify-center items-center  h-screen w-screen " >

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