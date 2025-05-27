import React, { useState, useEffect } from "react"
import { logoFormats } from "../constants/css-formats"
import "./editable.css"
export function EditableCSS() {
  const [cssCode, setCssCode] = useState(logoFormats.instragram)
  const styleElementId = "dynamic-style"

  useEffect(() => {
    let styleEl = document.getElementById(styleElementId)

    if (!styleEl) {
      styleEl = document.createElement("style")
      styleEl.id = styleElementId
      document.head.appendChild(styleEl)
    }

    // Update style tag with the new CSS
    styleEl.innerHTML = cssCode
  }, [cssCode])

  return (
    <div className="editablecontent">
      <div className="editablecontent" style={{ marginTop: "20px" }}>
        {`Go ahead! modify the style (you won't break anything)`}
      </div>
      <div className="editablecontent">
        <button className="instagram">
          <span className="instagramdot" />
        </button>
      </div>
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        rows={20}
        cols={40}
      />
    </div>
  )
}
