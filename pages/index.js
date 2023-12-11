import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


// imports
import { toastErrorStyle } from "../components/utils/toastStyle";
import TopNav from "../components/TopNav";
import MidPart from "../components/MidPart";

const Index = () => {

    return (
        <div className="container-fluid main">
            <TopNav />

            <MidPart />
            
            
            
        </div>
    );
};

export default Index;