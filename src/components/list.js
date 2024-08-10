import React from "react";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";

function List1(){
      const Row = ({ index, style }) => (
            <div style={style}>Div {index + 1}</div>
          );

      // const list = Array.from({length:1000000}, (_,i)=>'list '+i)
      const totalDivs = 1000000;
      const itemHeight = 35;


      return (
            <List
              height={window.innerHeight}
              itemCount={totalDivs}
              itemSize={itemHeight}
              width={"100%"}
            >
              {Row}
            </List>
      )
      // return(



            

            // <ul>
            //       <li>number of list items {list.length}</li>
            //       {
            //       list.map((item)=>{
            //             return(
            //             <li
                        
            //             height={window.innerHeight}
            //             itemCount={totalDivs}
            //             itemSize={itemHeight}
            //             width={"100%"}>

            //                   {item}
                              
            //             </li>
            //             )
            //       })      
                        
            //       }

            // </ul>
            
      // )
}

export default List1