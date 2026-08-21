import Nav from '../components/layout/Nav.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/sections/Hero.jsx'
import Bio from '../components/sections/Bio.jsx'
import Band from '../components/sections/Band.jsx'
import Press from '../components/sections/Press.jsx'
import Audiovisual from '../components/sections/Audiovisual.jsx'
import Gallery from '../components/sections/Gallery.jsx'

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Bio />
        <Band />
        <Press />
        <Audiovisual />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
