import {plansData} from '../../data/plansData';
import {startup} from "../../data/startup";
import whiteTick from '../../assets/whiteTick.png';
import {Link} from "react-router-dom"
import "./Allplans.css";
const Plans = () => {
    
    return(
        <div className="plans-container" id="plans" style={{paddingTop:"50px"}}>
            <div className="programs-header" style={{gap: '2rem'}} >
                <span class="stroke-text">READY TO START</span>
                <span class="stroke-text">YOUR JOURNEY</span>
                <span class="stroke-text">NOW WITH US</span>
            </div>
            <div className="programs-header" style={{gap: '2rem'}} >
                <span class="stroke-text p">GYM</span>
                <span class="stroke-text p">+</span>
                <span class="stroke-text p">CARDIO</span>
            </div>
            <div className="plans" style={{backgroundColor:"var(--grey"}}>
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
                        <Link to="/Joinnow"><button className="btn">Join Now</button></Link>
                    </div>
                })}
            </div>
            
            <div className="programs-header ph" style={{gap: '2rem',paddingTop:'100px'}} >
            <div className="blur plans-blur-3"></div>
            <div className="blur plans-blur-4"></div>
                <span class="stroke-text">START</span>
                <span class="stroke-text">UP</span>
                <span class="stroke-text">PLANS</span>
            </div>
            <div className="programs-header" style={{gap: '2rem'}} >
                <span class="stroke-text p">GYM</span>
                <span class="stroke-text p">ONLY</span>
            </div>
            <div className="plans ep">
                {startup.map((plan, i)=>{return <div className="plan" key={i}>
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
                        <button className="btn">Join Now</button>
                    </div>
                })}
            </div>
        </div>
        
    );
};

export default Plans;