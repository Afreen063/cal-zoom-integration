
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  const [value, setvalue]=useState(false);
  return (
    <div className="App">
      <button onClick={()=>{setvalue(true)}}>click me</button>
      {value?<InlineWidget url="https://calendly.com/afreen0501" />:null}
    </div>
  );
};

export default App;