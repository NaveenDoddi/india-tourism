import React from "react";

var offwidth = document.getElementById("table-responsiveness").offsetWidth

function PageNation(){
    
    const style = {
        position:"relative",
        left: (offwidth/2)-135,
    }
    return(
        <>
        <div style={{width:"auto"}}>
            <div className="pagination" style={style}>
                <a href="">..</a>
                <a href="Table1">1</a>
                <a href="Table2">2</a>
                <a href="Table3">3</a>
                <a href="Table4">4</a>
                <a href="Table5">5</a>
                <a href="">..</a>
            </div>
        </div>

        </>
    )
}
export default PageNation