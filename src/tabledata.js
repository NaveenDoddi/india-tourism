import React from "react"
import { data } from "./dataEmployee"

function Table(){
    var table = document.createElement("table")
    for(let i=0; i<100; i++){
        var row = document.createElement("tr")
        for(let j=0; j<7; j++){
            var col1 = document.createElement("col")
            col1.innerText = data[i][j]
            row.append(col1)
        }
        table.append(row)

        // console.log(data[i].length)
    }
    return table
}
export default Table

