import "./react.css"
import { Link } from "react-router-dom"
import { paths } from "../constants/paths"

export function ReactLogo() {
  return (
    <div>
      <Link to={paths.react}>
        <button className="react">
          <div className="core" />
          <div class="orbit orbit1" />
          <div class="orbit orbit2" />
          <div class="orbit orbit3" />
        </button>
      </Link>
      <p>"I am hooked to this framework"</p>
    </div>
  )
}
