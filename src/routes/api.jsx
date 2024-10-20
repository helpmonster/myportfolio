import React from 'react'
import Nav from '../component/nav'
function api() {

    async function fetchData() {
               const p = document.getElementById("p")

       const name = document.getElementById("search").value
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
       const data = await res.json()
       console.log(data.sprites.front_default);
       const poki = document.getElementById("poki")
        poki.setAttribute("src", data.sprites.front_default)
        p.innerHTML=data.name
   }
   
    return (
        <>
            <Nav />
            <div className="api-cover">
            <div className="api-cont">
                <input id='search' type="text" />
                <img id='poki' className='dice-image1' src="./images/1.png" alt="" />
                <p id='p'>name</p>
                <button onClick={ fetchData}>ENTER</button>
            </div>
            </div>
        </>
  )
}

export default api