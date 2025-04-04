import { useState } from "react";

const MidPart=()=>
{
    // toggle skill visibilty
    const [skillVisible, setSkillVisible] = useState(false);
    const toggleVisibility = () => {
        setSkillVisible(!skillVisible);
      };

    return (
        <>
            <div className="home row" id="Home">
                <div className="home-part1 col-lg-8 col-md-12 col-sm-12">
                    <div className="name-container">
                        <p className="name-text">
                            Hi, I am Meghanath Shetty,
                        </p>
                        <p className="course-text">
                           MCA Graduate
                        </p>
                    </div>
                    <div className="other-text">
                        I am a passionate individual exploring new career opportunities, driven by a keen interest
                         in languages and development tools. My goal is to contribute my skills to a dynamic
                          work environment while continually expanding my knowledge and capabilities.
                     <div className="skill-btn mt-3" id="skill-toggle-btn" onClick={toggleVisibility}><u>Skills</u></div>
                     {/* Shifted here ( Original placement below )*/}
                    <div className={`skills ${skillVisible ? 'skills-visible' : ''}`} 
                        style={skillVisible ? { transition: 'all 1s ease-in-out' } : { transition: 'all 0.3s ease-in-out' }}
                    >
                        <button className="btn skill-btn" >Flutter</button>
                        <button className="btn skill-btn" >Java</button>
                        <button className="btn skill-btn" >Javascript</button>
                        <button className="btn skill-btn" >MySQL</button>
                        <button className="btn skill-btn" >React</button>
                        <button className="btn skill-btn" >MERN</button>
                        <button className="btn skill-btn" >Python</button>
                        <button className="btn skill-btn" >Node.js</button>
                    </div>
                    </div>
                </div>
                <div className="home-part2 col-lg-4 col-md-12 col-sm-12">
                    <img src="/imgs/me1_no_bg.png"  alt="Image" />
                </div>

            </div>

        </>

    );

}

export default MidPart;
