import { FaArrowRight } from "react-icons/fa6";

const Project=()=>
{

    return (
        <>
        <h1 className="project-head" id="Projects">Projects</h1>

        <div className="project row ">

            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Weather Forecast</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>React</p>
                    </div>
                    <div className="project-text col-8">
                        Weather Forecast is a web app developed using React, 
                        which displays hourly forecasts, air quality, and other related information.
                        It allows users to search for locations and features dynamic backgrounds based
                        on weather conditions, along with theme-change capabilities.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="#dfdfd">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/vector1.jpg"  alt="vector1-img" />
                </div>
            </div>

            
            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Library Management System</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>Python</p>
                    </div>
                    <div className="project-text col-8">
                        Library Management System is an desktop application developed
                        using Python and uses MySQL as database.The app sports an admin and client
                        side.Has penalty system for late returns and an easy to use interface.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="#dfdfd">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/vector1.jpg"  alt="vector1-img" />
                </div>
            </div>

            
            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Weather Forecast</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>React</p>
                    </div>
                    <div className="project-text col-8">
                        Weather Forecast app based on react,
                        fdhgfd mfdg fdgfdgfdg fd gfdg fdgfdgfdgdfg
                        dfgdfgdf fdhgfd mfdg fdgfdgfdg fd gfdg fdgfdgfdgdfg
                        dfgdfgdf    fdhgfd mfdg fdgfdgfdg fd gfdg fdgfdgfdgdfg
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="#dfdfd">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/vector1.jpg"  alt="vector1-img" />
                </div>
            </div>

            
            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Weather Forecast</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>React</p>
                    </div>
                    <div className="project-text col-8">
                        Weather Forecast app based on react,
                        fdhgfd mfdg fdgfdgfdg fd gfdg fdgfdgfdgdfg
                        dfgdfgdf fdhgfd mfdg fdgfdgfdg fd gfdg fdgfdgfdgdfg
                        dfgdfgdf    fdhgfd mfdg fdgfdgfdg fd gfdg fdgfdgfdgdfg
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="#dfdfd">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/vector1.jpg"  alt="vector1-img" />
                </div>
            </div>

        </div>

        </>
    )

}

export default Project;