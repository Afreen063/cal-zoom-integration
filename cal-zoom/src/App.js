
import { useState } from "react";


const App = () => {
  const [open, setOpen] =useState("");
  function handleClick()
  {
    fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9904b4a740bf476383cc75a848f17e0d")
    .then(x => x.json())
    .then(y => console.log(y.articles[0].author ))
  }
  return (
    <div className="App">
      <button  style={{display:"block",margin:"0 auto"}} 
      onClick={handleClick}
      >Click it</button>
     
    </div>
  );
};

export default App;
