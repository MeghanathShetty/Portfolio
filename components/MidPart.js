import { useState, useEffect } from "react";


const MidPart=()=>
{
    // toggle skill visibilty
    const [skillVisible, setSkillVisible] = useState(false);
    const toggleVisibility = () => {
        setSkillVisible(!skillVisible);
        console.log("fdsggsd")
      };

    return (
        <>
            <div className="home row">
                <div className="home-part1 col-lg-8 col-md-12 col-sm-12">
                    <div className="name-container">
                        <p className="name-text">
                            Hi,I am Meghanath Shetty,
                        </p>
                        <p className="course-text">
                           MCA Graduate
                        </p>
                    </div>
                    <div className="other-text">
                    A motivated individual with knowledge of languages and development tools, seeking a position in a 
                    growth-oriented company where I can use my skills to the advantage of the company while having the
                     scope to develop my own skills.
                     <div className="skill-btn mt-3" onClick={toggleVisibility}><u>Skills</u></div>
                    </div>
                </div>
                <div className="home-part2 col-lg-4 col-md-12 col-sm-12">
                    <img src="/imgs/vector1.jpg"  alt="vector1-img" />
                </div>
                <div className={`skills ${skillVisible ? 'skills-visible' : ''}`}>
                    <button className="btn skill-btn" style={{ fontSize: '1.1vw' }}>JavaScript</button>
                    <button className="btn skill-btn" style={{ fontSize: '1.1vw' }}>React</button>
                    <button className="btn skill-btn" style={{ fontSize: '1.1vw' }}>Node.js</button>
                    <button className="btn skill-btn" style={{ fontSize: '1.1vw' }}>HTML</button>
                    <button className="btn skill-btn" style={{ fontSize: '1.1vw' }}>CSS</button>
                </div>
            </div>



            


            
        
        </>

    );

}

export default MidPart;