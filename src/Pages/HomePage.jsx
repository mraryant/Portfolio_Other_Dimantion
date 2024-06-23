
import { useEffect } from 'react';
import About from '../Components/home-ke-section/About'
import Hero from '../Components/home-ke-section/Hero'


// import { useGSAP } from '@gsap/react';
// import { useEffect, useRef } from 'react';
import Overlay from '../Components/Overlay';
import { useLocation } from 'react-router-dom';
 




const HomePage = () => {


  // Function to scroll to the Card element
  const location1 = useLocation();
  useEffect(() => {
    const scrollToElement = () => {
      const { search } = location1;
      const params = new URLSearchParams(search);
      const scrollToId = params.get('');

      if (scrollToId) {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToElement();
  }, [location1]);





  return (
    <>
      <div  className='relative' >

        <div className=' fixed right-5 top-5 z-[1]  w-fit' >
            <Overlay />
        </div>
         
        <Hero />
        <About />
      </div>
    </>
  )
}

export default HomePage