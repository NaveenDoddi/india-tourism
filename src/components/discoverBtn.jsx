import React from "react";

function DiscoverBtn() {

      const btn_style = { 
            backgroundColor: 'red', 
            color: 'white', 
            padding: '0.7rem 2rem', 
            borderRadius: '2rem', 
            fontWeight: "bold" 
      }

      return (
            <div>
                  <span className="btn mt-4" style={btn_style}>
                        Discover More
                  </span>
            </div>
      )
}

export default DiscoverBtn