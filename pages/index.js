import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


// imports
import { toastErrorStyle } from "../components/utils/toastStyle";
import TopNav from "../components/TopNav";
import MidPart from "../components/MidPart";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Index = () => {

    // Load bootstrap
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
        script.crossOrigin = 'anonymous';           // Set crossOrigin attribute for better security
        script.integrity = 'your-integrity-check';  // Add the integrity attribute for security
        document.body.appendChild(script);
    
        // Cleanup the script on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    

    return (
        <div className="container-fluid main">
            <TopNav />

            <MidPart />

            <Project />

            <Contact />
        </div>
    );
};

export default Index;