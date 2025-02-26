import { useState } from "react";

function Copy() {
  const [count, setCount] = useState(0); 

  const handleClick = () => {
    setCount((prevCount) => {
      if (prevCount < 100) return prevCount + 10; 
      if (prevCount > 40) return prevCount - 10; 
      return 50; 
    });
  };  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Copy;

