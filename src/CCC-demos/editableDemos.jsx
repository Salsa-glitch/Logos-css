import React, { useState, useEffect } from "react"
import { logoFormats } from "../constants/css-formats"
import "./editable.css"
export function EditableInstagram() {
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

export function EditableReact() {
  const [cssCode, setCssCode] = useState(logoFormats.react)
  const styleElementId = "dynamic-style2"

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
        <button className="react">
          <div className="core" />
          <div class="orbit orbit1" />
          <div class="orbit orbit2" />
          <div class="orbit orbit3" />
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

export function EditableTiktok() {
  const [cssCode, setCssCode] = useState(logoFormats.tiktok)
  const styleElementId = "dynamic-style3"

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
        <button className="tiktokbackground">
          <span className="tiktok" />
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

export function EditableWindows() {
  const [cssCode, setCssCode] = useState(logoFormats.windows)
  const styleElementId = "dynamic-style4"

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
        <button class="split-image-container">
          <div class="quadrant quadrant-1"></div>
          <div class="quadrant quadrant-2"></div>
          <div class="quadrant quadrant-3"></div>
          <div class="quadrant quadrant-4"></div>
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

export function EditableYoutube() {
  const [cssCode, setCssCode] = useState(logoFormats.youtube)
  const styleElementId = "dynamic-style5"

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
        <button className="youtubespace">
          <span className="youtube" />
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

export function EditableGoogle() {
  const [cssCode, setCssCode] = useState(logoFormats.google)
  const styleElementId = "dynamic-style6"

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
        <button className="google"></button>
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
