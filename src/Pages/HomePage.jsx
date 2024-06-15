
import About from '../Components/home-ke-section/About'
import Hero from '../Components/home-ke-section/Hero'

import gsap from 'gsap';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Overlay from '../Components/Overlay';
import Headroom from 'react-headroom';



// Register ScrollSmoother plugin
// gsap.registerPlugin(ScrollSmoother);

const HomePage = () => {

  const container = useRef();

  // useGSAP to initialize ScrollSmoother within the container's scope
  useGSAP(() => {
    // ScrollSmoother.create({
    //   smooth: 1.5, // Adjust smoothness factor
    //   effects: true, // Enable effects like parallax if needed
    //   normalizeScroll: true, // Normalize mousewheel scroll
    //   content: container.current, // Scope to this container
    // });
  }, { scope: container });




  return (
    <>
      <div ref={container} className='relative' >

        <div className=' fixed right-5 top-5 z-[1]  w-fit' >
          {/* <Headroom   > */}
            <Overlay />
          {/* </Headroom> */}
        </div>

        <Hero />
        <About />
      </div>
    </>
  )
}

export default HomePage