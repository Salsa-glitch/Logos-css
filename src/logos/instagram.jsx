import "./instagram.css"
import { Link } from "react-router-dom"

export function InstaLogo() {
  return (
    <div>
      <Link to="/css-demo">
        <button className="insta">
          <span className="instagramdot" />
        </button>
      </Link>
      <p>{`"Makes you want to snap a selfie"`}</p>
    </div>
  )
}
