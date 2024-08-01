import react from "react";
import { useState } from "react";
var index = 0;
function Carasoul() {
  const images = [
    "https://via.placeholder.com/600x300?text=Slide+1",
    "https://via.placeholder.com/600x300?text=Slide+2",
    "https://via.placeholder.com/600x300?text=Slide+3",
  ];
  const [current, setCurrent] = useState(0);

  const imgagesStyle = {
    height: "200px",
    width: "350px",
  };

 
  const prev = () => {
    index -= 1;
    if(index < 0){ index = 0 };
    setCurrent(index);
  };
  const next = () => {
    index += 1;
    if(index > 2){ index = 2 };
    setCurrent(index);
  };

  setInterval(() => {
      index += 1
      if(index == 3){ index = 0 };
      setCurrent(index)
  }, 2000);
 
  return (
    <>
      <div style={{display:"flex", justifyContent:"center"}}>

            <img style={imgagesStyle} src={images[current]} alt="" />  
      </div>
      <p style={{ textAlign: "center" }}>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
      </p>
        
    </>
  );
}

export default Carasoul;
