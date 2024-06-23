import { useEffect, useState } from "react";
 
import sward from "../../assets/myimages/sward.png"
import het from "../../assets/myimages/het.png"
import abt2 from "../../assets/myimages/abt2.png"

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Tilt } from "react-tilt";
import Btn from "../Btn";
gsap.registerPlugin(Draggable, useGSAP, ScrollTrigger, ScrollToPlugin);




const About = () => {

      const [text, settext] = useState("Let me introduce this chaild");
    useEffect(() => { 
  
      setInterval(() => {
        settext("If you are worthy  You  can take the sward on firt attampt")
      }, 10000);
    }, [])

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 45,     // max tilt rotation (degrees)
    perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 2000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  Draggable.create("#sward");
  useGSAP(() => {
    gsap.to("#imageshat", {
      y: '+=20', // Move down 20px
      repeat: -1, // Infinite repeat
      yoyo: true, // Reverse the animation on each repeat
      ease: 'sine.inOut', // Easing function for smooth animation
      duration: 2 // Duration of each animation cycle
    });
  }, []);


  return (
    <>
      <div id="About" className="py-20 phone:py-10 overflow-hidden "  >
        <div className="min-h-fit w-full flex flex-col  gap-10 phone:gap-20 ">

          <div id="abt3">
            <div id="listing" className='   relative min-h-[30vh]    px-10 py-10 phone:py-1 phone:px-3   flex flex-col gap-20'>


              <div id="filler-main" className='flex z-10  w-full gap-10 tablet:gap-24 tablet:flex-col tablet:items-center '>

                <div data-aos="zoom-in" id="filler-left" className=' z-10 w-[50%] h-[100%] flex tablet:w-[80%] tablet:phone:w-[100%]  justify-center '>

                  <div id='imageshat' className=" relative w-[30rem]" >
                    <div id='sward' className=" z-[-1]   absolute left-28 top-[45%] phone:top-[30%] phone:rotate-[130deg] phone:left-20 rotate-[120deg] ">
                      <Tilt options={defaultOptions}>
                        <img src={sward} className=" h-[19rem]  w-auto " alt="" />
                      </Tilt>
                    </div>


                    <div className=" z-20 w-full h-auto">
                      <img loading="lazy"
                        src={het}
                        alt='VOIP  '
                        className='   w-full h-full'
                      />
                    </div>

                    <div className=" absolute left-[55%] top-0 bg-[#F5E3BD] text-black font bold p-4 px-6 w-fit rounded-e-full rounded-tl-full ">
                      {/* <p>Let me introduce this chaild </p> */}
                      <p className=" phone:text-sm " >{text}</p>
                    </div>

                    
                  </div>
                </div>



                <div id="filler-right" className=' w-[50%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-[100%] tablet:text-center '>
                  {/* <h3 className="btn3 text-sm w-fit tablet:mx-auto   pointer-events-none " > Use Case </h3> */}
                  <h2 data-aos="fade-up" className='text-5xl font-extralight  desktop:text-4xl    desktop:tablet:phone:text-3xl    '>
                    About “Aryant Shrirang ”
                  </h2>
                  <div data-aos="fade-up" className=" space-y-5 max-w-2xl  ">


                    <p className="text-lg  tablet:phone:text-base  text-gray-300 tablet:phone:leading-tight  tablet:text-center">
                      Gather round,  ladies and gentlemen ! Today, I present to you an extraordinary individual. Born under celestial stars, this 22-year-old harbors an unyielding passion for web development. With resolve as fierce as facing a Hungarian Horntail, they navigate the digital realm with finesse. Their perseverance mirrors the valor of Aurors. Moreover, having explored diverse technologies, their expertise shines. Let us raise our wands in welcome to this web wizard, whose heart brims with the courage of a true hero!
                    </p>

                     
                  </div>

                </div>
              </div>

            </div>
          </div>



          <div id="abt4">
            <div id="listing" className='   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-3   flex flex-col gap-20'>

              <div className=" absolute left-0 top-[-60%]    z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={1275} viewBox="0 0 877 1275" fill="none">
                  <g filter="url(#filter0_bdf_1102_467)">
                    <path d="M294.359 651.975C292.306 744.87 98.1467 866.605 5.2512 864.552C-87.6443 862.499 -156.825 717.23 -154.772 624.335C-152.719 531.439 37.7847 408.148 130.68 410.201C223.576 412.254 296.412 559.079 294.359 651.975Z" fill="#1779ae8b" />
                  </g>
                  <defs>
                    <filter id="filter0_bdf_1102_467" x="-564.617" y="0.375549" width="1440.92" height={1274} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="45.7" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1102_467" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx={352} dy={4} />
                      <feGaussianBlur stdDeviation="114.95" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="effect1_backgroundBlur_1102_467" result="effect2_dropShadow_1102_467" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1102_467" result="shape" />
                      <feGaussianBlur stdDeviation="204.9" result="effect3_foregroundBlur_1102_467" />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className=" absolute right-0 top-[-25%] tablet:top-[0%]    z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" width={899} height={1192} viewBox="0 0 899 1192" fill="none">
                  <g filter="url(#filter0_bdf_1102_466)">
                    <path d="M975 668.438C975 741.567 654.343 839.181 569.628 739.677C481.468 739.677 410 680.394 410 607.264C410 534.135 566.183 410 654.343 410C742.503 410 975 595.308 975 668.438Z" fill="#77a4bc95" fillOpacity="0.9" shapeRendering="crispEdges" />
                  </g>
                  <defs>
                    <filter id="filter0_bdf_1102_466" x="0.200012" y="0.200012" width="1556.7" height="1191.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="45.7" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1102_466" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx={352} dy={4} />
                      <feGaussianBlur stdDeviation="114.95" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="effect1_backgroundBlur_1102_466" result="effect2_dropShadow_1102_466" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1102_466" result="shape" />
                      <feGaussianBlur stdDeviation="204.9" result="effect3_foregroundBlur_1102_466" />
                    </filter>
                  </defs>
                </svg>

              </div>

              <div id="filler-main" className='flex z-10  w-full gap-10 tablet:flex-col-reverse  tablet:items-center '>

                <div id="filler-right" className=' w-[60%] flex flex-col items-center justify-center   gap-10 tablet:gap-5 tablet:w-[100%] tablet:text-center '>
                  {/* <h2 className="btn3 text-sm w-fit  tablet:mx-auto pointer-events-none " > Use Case </h2> */}
                  <h2 data-aos="fade-up" className='text-5xl font-extralight  desktop:text-4xl    desktop:tablet:phone:text-3xl   '>
                    Technical Skill
                  </h2>

                  <div data-aos="fade-up" className=" flex gap-14 justify-center flex-wrap  max-w-2xl  ">

                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    <Btn
                      tm="Reactjs sdjfhh"
                      t1="React Hooks"
                      t2="Effective Animations "
                      t3="Dynamic Components "
                      t4="Multiple Libraries "
                      t5="Vite configuration"
                    />
                    
                  </div>

                </div>

                <div data-aos="zoom-in" id="filler-left" className=' z-10 w-[40%]  flex tablet:w-[80%] tablet:phone:w-[100%]    justify-center '>
                  <img loading="lazy"
                    src={abt2}
                    alt='VOIP  '
                    className='  w-[20rem]  '
                  />
                </div>




              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About