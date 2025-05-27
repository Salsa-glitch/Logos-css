import React, { useState, useEffect } from "react"
import { logoFormats } from "../constants/css-formats"

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
    <div>
      <h2>Editable CSS</h2>
      <button className="instagram">
        <span className="instagramdot" />
      </button>
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        rows={40}
        cols={40}
        placeholder="Type CSS here, e.g.:
#styled-box {
  background: lightblue;
  padding: 20px;
}"
      />
      <div id="styled-box" style={{ marginTop: "20px" }}>
        I'm a box! Style me with your CSS above.
      </div>
    </div>
  )
}
