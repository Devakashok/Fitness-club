import React, { useReducer } from "react";
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import {useNavigate} from "react-router-dom"
import "./Plans.css";
const Plans = () => {
    const navigate=useNavigate();
    return(
        <div className="plans-container" id="plans">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{gap: '2rem'}} >
                <span class="stroke-text">READY TO START</span>
                <span class="stroke-text">YOUR JOURNEY</span>
                <span class="stroke-text">NOW WITHUS</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i)=>{return <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>₹ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i)=>{ return <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            })}
                        </div>
                        <button className="btn" onClick={()=>navigate("/login")}>Join Now</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Plans;