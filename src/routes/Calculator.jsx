import React, { useState } from "react";
import Nav from "../component/nav";
function Calculator() {
const [inputValue, setInputValue]=useState()
  const inputt = document.getElementById("calcc")
    function appendDisplay(e) {
      console.log(e.target.innerHTML);
      // const xxx = inputt.value
    inputt.value +=  e.target.innerHTML 
  }
  function answer() {
      // inputt.value = eval(inputt.value)
  }
  function nums() {
    
  }
    
  
 let inputbar = document.getElementById('calcc')
  

  return <>
    <Nav />
    <div className="calculator">
<div className="container">
        <input placeholder="0" id="calcc" value={inputValue}  readOnly type="text"/>
        <div className="calc-btn">
          <button >C </button>
        <button onClick={appendDisplay}  className="calcbtn"> </button>
        <button onClick={appendDisplay} className="calcbtn">% </button>
        <button onClick={appendDisplay} className="calcbtn">/ </button>
        <button onClick={appendDisplay} className="calcbtn" >7 </button>
        <button onClick={appendDisplay} className="calcbtn" >8 </button>
        <button onClick={appendDisplay} className="calcbtn" >9 </button>
        <button onClick={appendDisplay} className="calcbtn" >* </button>
        <button onClick={appendDisplay} className="calcbtn" >4 </button>
        <button onClick={appendDisplay} className="calcbtn" >5 </button>
        <button onClick={appendDisplay} className="calcbtn" >6 </button>
        <button onClick={appendDisplay} className="calcbtn" >- </button>
        <button onClick={appendDisplay} className="calcbtn" >1 </button>
        <button onClick={appendDisplay} className="calcbtn" >2 </button>
        <button onClick={appendDisplay} className="calcbtn" >3 </button>
        <button onClick={appendDisplay} className="calcbtn" >+ </button>
        <button onClick={appendDisplay} className="calcbtn" >0 </button>
        <button onClick={appendDisplay} className="calcbtn" >. </button>
        <button onClick={answer()} >= </button>
        <button onClick={nums()} className="calcbtn" >len</button>
  
    </div>
        
    </div> </div>    </>
    
}
export default Calculator