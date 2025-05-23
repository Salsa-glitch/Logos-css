import "./windows.css"

export function WindowsLogo() {
  return (
    <div className="container">
      <div class="split-image-container">
        <div class="quadrant quadrant-1"></div>
        <div class="quadrant quadrant-2"></div>
        <div class="quadrant quadrant-3"></div>
        <div class="quadrant quadrant-4"></div>
      </div>
      <p>{`"Hover to reveal the logo"`}</p>
    </div>
  )
}
