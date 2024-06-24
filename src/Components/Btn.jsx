import { useState } from "react";
import "../style/Btn.css"
import PropTypes from 'prop-types';

const Btn = ({ t1, tm, t2, t3, t4, t5 }) => {
    const [py, setpy] = useState(false);
    return (
        <>
            <button className={`button rounded-full   ${py?" phone:my-14":"my-0" } `} onClick={()=> {setpy(!py)}} >
                <div className="icon">
                    <span className={`text-icon  ${py ? " " : "hide" } `}>{t1}</span>
                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" fill="#ffffff"></path></g></svg>
                </div>
                <span className="title text-xl px-3"> {tm} </span>
                <div className={`padding-left ${py ? " " : "hide" }`}>
                    <div className="padding-left-line">
                        <span className="padding-left-text">{t2}</span>
                    </div>
                </div>
                <div className={`padding-right ${py ? " " : "hide" }`}>
                    <div className="padding-right-line">
                        <span className="padding-right-text">{t5}</span>
                    </div>
                </div>
                <div className={`background ${py ? " " : "hide" }`}>
                    <span className="background-text">{t3}</span>
                </div>
                <div className={`border ${py ? " " : "hide" }`}>
                    <span className="border-text">{t4}</span>
                </div>
            </button>


        </>
    )
};

Btn.propTypes = {
    t1: PropTypes.string.isRequired,
    tm: PropTypes.string.isRequired,
    t2: PropTypes.string,
    t3: PropTypes.string,
    t4: PropTypes.string,
    t5: PropTypes.string,
};

Btn.defaultProps = {
    t2: '',
    t3: '',
    t4: '',
    t5: '',
};

export default Btn