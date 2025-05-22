import "./App.css"
import { InstaLogo } from "./logos/instagram"
import { TiktokLogo } from "./logos/titkok"
import { YoutubeLogo } from "./logos/youtube"

function App() {
  return (
    <>
      <main className="logos">
        <section className="logo">
          <InstaLogo />
          <YoutubeLogo />
          <InstaLogo />
          <TiktokLogo />
          <InstaLogo />
          <InstaLogo />
        </section>
      </main>
    </>
  )
}

export default App
