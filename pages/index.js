import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


// imports
import { toastErrorStyle } from "../components/utils/toastStyle";
import TopNav from "../components/TopNav";
import MidPart from "../components/MidPart";
import Project from "../components/Project";

const Index = () => {

    return (
        <div className="container-fluid main">
            <TopNav />

            <MidPart />

            <Project />
            
            
            
        </div>
    );
};

export default Index;