
import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css'
import "../src/style/Loader.css"
 
const HomePage = lazy(() => import('./Pages/HomePage'))

 


// Loading spinner component
const Loader = () => (
  <div className='flex-col' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    {/* // <div id="div1"> */}
    <div className='flex gap-5' >
      <div className=' flex justify-center items-center bg-gray-900  h-[10rem] w-[10rem]  rounded-full rounded-tl-none '>
        <div className=' flex justify-center items-center bg-gray-800  h-[8rem] w-[8rem]  rounded-full rounded-tl-none '>
          <div id="l" >
            <div className="pupil">
              <div className="p5">
                <div className="pupl2">
                  <div className="pupil3"></div>
                  <div className="pupil4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className=' flex justify-center items-center bg-gray-900  h-[10rem] w-[10rem]  rounded-full rounded-tr-none '>
          <div className=' flex justify-center items-center bg-gray-800  h-[8rem] w-[8rem]  rounded-full rounded-tr-none '>
            <div id="m" >
              <div className="pupil">
                <div className="p5">
                  <div className="pupl2">
                    <div className="pupil3"></div>
                    <div className="pupil4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>


        <div id="c" className=' flex justify-center items-center h-[7rem]  w-[5rem] bg-gray-900  '>
      <div id="c" className=' h-[5rem]  w-[3rem] bg-gray-800  '>

      </div>
        </div>

      </div>


  // </div>
    );


const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

    return null;
};

    function App() {





  // useEffect(() => {
  //   AOS.init({
  //     offset: 0,
  //     duration: 1000,
  //     once: false,
  //   });
  // }, []);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(delay);
  }, [])


    return (
    <>
      <div className=' flex flex-col mx-auto   min-w-screen max-w-[1600px]' >
        <BrowserRouter>
            <ScrollToTop />
            

          <Routes>

            <Route path="*" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <Navigate to="/" />
              </Suspense>
            } />

            <Route path="/" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <HomePage />
              </Suspense>
            } />
            <Route path="/l" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <Loader />
              </Suspense>
            } />

          </Routes>
              
        </BrowserRouter>

      </div>
    </>
    )
}

    export default App
