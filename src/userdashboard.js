import React from "react";
import Navbar from "./navbar";
import { data } from "./dataEmployee";
function Yes(){


    for(let i=0; i<100; i++){
        console.log(data[i])
    }
    return(
        <>
            <Navbar />

            
        </>
    )
}
export default Yes
