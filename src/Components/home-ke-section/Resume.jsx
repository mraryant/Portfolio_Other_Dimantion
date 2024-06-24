
import frame from "../../assets/myimages/resuframe.png"
import falcon from "../../assets/myimages/resufalcon.svg"
import owl from "../../assets/myimages/resuowl.svg"
import btnbg from "../../assets/myimages/btnbg.png"
import { Tilt } from "react-tilt"
// "../../../public/aryant resume 18_6_24.pdf"


const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const Resume = () => {
    const handleDownload = () => {
   
        window.open("/aryant resume 18_6_24.pdf ", '_blank');
    };

  
    return (
        <>
            <div className=" flex  items-center justify-center bg-[url('/resumebg.png')] bg-contain desktop:bg-cover bg-center bg-no-repeat relative  min-h-[120vh] w-full  " >



                <div id="listing" className='  relative min-h-[90vh] w-[70rem] overflow-hidden  px-10 py-10 tablet:px-10     tablet:phone:px-3   flex flex-col justify-center  gap-20'>


                    <div id="filler-main" className='flex z-10  w-full gap-5 tablet:flex-col-reverse  tablet:items-center '>

                        <div id="filler-right" className=' w-[60%] flex flex-col   justify-center tablet:items-center   gap-10 tablet:gap-5 tablet:w-[100%] tablet:text-center '>

                            <h2 data-aos="fade-up" className=' tracking-wider w-full     text-5xl  desktop:text-4xl text-shadow desktop:tablet:phone:text-3xl   '>
                                My Angle Birds Brings you  My Resume
                            </h2>

                            <div data-aos="fade-up" className=" text-shadow flex phone:flex-col gap-14 phone:gap-2  justify-center flex-wrap  max-w-2xl  ">

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur iste illum fugit perferendis, unde eligendi, nihil, consequuntur sed maxime in? Beatae fugiat animi aspernatur corrupti doloremque ad similique eum provident exercitationem officia veritatis facere facilis placeat vitae nobis, ratione explicabo, reprehenderit sapiente repellendus quam in a. Quaerat, odio aliquid!
                                </p>


                            </div>

                            <button onClick={handleDownload} className=" hover:scale-[1.05] active:scale-[0.95] transition-all ease-in-out duration-200  relative w-fit " >
                                <img src={btnbg} alt="" />
                                <p className=" absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full text-black " >Download Resume</p>
                                </button>
                        </div>

                        <div data-aos="zoom-in" id="filler-left" className=' z-10 w-[40%]  flex tablet:w-[80%] tablet:phone:w-[100%]    justify-center '>
                            <div>
                                <div id="falcon" className=" flex top-10 left-10 rotate-[15deg] relative ">
                                    <img id="f1" className="  w-[15rem] " src={frame} alt="" />
                                    <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[25rem] h-[25rem]    " >
                                        <img id="f2" className=" w- full h-full " src={falcon} alt="" />
                                    </div>
                                </div>

                                <Tilt options={defaultOptions} >
                                <div id="Owl" className="  flex  rotate-[-20deg] left-0 -top-20 relative ">
                                    <img id="o1" className="  w-[15rem] " src={frame} alt="" />
                                        <div className="absolute  top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[30rem] h-[30rem]  perspective  " >
                                        <img id="o2" className=" w-full h-full rotate-[70deg] " src={owl} alt="" />
                                    </div>
                                </div>
                                </Tilt>
                                 
                            </div>
                        </div>

                    </div>

                </div>



            </div>

        </>
    )
}

export default Resume