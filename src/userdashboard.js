import React from "react";
import Navbar from "./navbar";
import PageNation from "./pagenation";
import Table1 from "./empTable1";

function Dashboard(){
    return(
        <>  
            <Navbar />
            <Table1 />
            <PageNation />
        </>
    )
}
export default Dashboard
