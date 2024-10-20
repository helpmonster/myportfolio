import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import App from './App.jsx'
import Calculator from './routes/Calculator.jsx'
import Api from "./routes/api.jsx"
import Game from "./routes/game.jsx"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
   {
    path: "/api",
    element: <Api />,
   },
   {
    path: "/game",
    element: <Game />,
  }
]);

const root  = ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
