import react from "react"
import "../App.css"
import Nav from "./nav.jsx"
function Home(){
    return(
        <>
        <header>
           <Nav/>
                <img src="./emmanuel.jpg"  alt="" className="me" />
            <div className="intro">
              <h1> ONOSODE EMMANUEL</h1>
                <h2>A WEB DEVELOPER</h2>
            </div>
        </header>
        </>
    )
}
export default Home