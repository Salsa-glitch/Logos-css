import { Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { EditableCSS } from "./CCC-demos/editableContent"
import { InstaLogo } from "./logos/instagram"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/css-demo" element={<EditableCSS />} />
    </Routes>
  )
}

export default App
