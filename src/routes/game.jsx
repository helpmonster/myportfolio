import { useState } from "react"
import React from 'react'
import Nav from "../component/nav"
function Game() {
     const diceImage = document.querySelector(".dice-image1")
// console.log(`dice${xx}.jpg`);

    function roll() {
        let xx = Math.floor(Math.random() *6 +1) 

     var yy= `./images/${xx}.png`
        diceImage.setAttribute('src', yy)
        console.log(yy);


    }
            let num = 2

//   const [num, setNum] = useState()

//         setNum(num += 2)
//     console.log(num); 
    const hide = document.querySelector("#hide")
        const go = document.querySelector("#go")

    const [name, setName]= useState("")
    function handle(e) {
        console.log(e.target.value);
        setName(e.target.value)
    }
    function hiide() {
        hide.style.display = "none"
         go.style.display ="none"

    }
    return (
        <>
            <Nav />
            <div className="game-container">
                <h1>GAME 2.0</h1> 
              <div className="game-cover">

                    <div className="gamecard1">
                        <h2 className="playername">{ name}</h2>
                        <input id="hide" onChange={handle} type="text" placeholder='enter your name' />
                        <button onClick={hiide} id="go">.</button>
                        <p>your score</p>
                 <img className='dice-image1' src="./images/1.png" alt="some bull shit" /><br />
                 <button onClick={roll} className="roll">ROLL</button>
                </div>
                
                 <div className="gamecard2">
                 <input type="text" placeholder='enter your name' />
                        <p>your score</p>
                 <img className='dice-image2' src="./images/1.png" alt="" /><br />
                 <button  className="roll">ROLL</button>
                </div>
                </div>
                </div>

             
        </>
  )
}

export default Game