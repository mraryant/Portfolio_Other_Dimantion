import { useState } from "react";
import "../style/Btn.css"
import PropTypes from 'prop-types';

const Btn = ({ t1, tm, t2, t3, t4, t5 }) => {
 
    return (
        <>
            <button className={`button rounded-full  phone:hover:my-14 `}   >
                <div className="icon">
                    <span className="text-icon hide">{t1}</span>
                    <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth={2} stroke="currentColor" height={24} width={24} viewBox="0 0 24 24">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                </div>
                <span className="title text-xl px-3"> {tm} </span>
                <div className="padding-left hide">
                    <div className="padding-left-line">
                        <span className="padding-left-text">{t2}</span>
                    </div>
                </div>
                <div className="padding-right hide">
                    <div className="padding-right-line">
                        <span className="padding-right-text">{t5}</span>
                    </div>
                </div>
                <div className="background hide">
                    <span className="background-text">{t3}</span>
                </div>
                <div className="border hide">
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