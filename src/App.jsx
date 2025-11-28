
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import StyleGuide from './components/StyleGuide'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Cursor from './components/Cursor'

import Spotlight from './components/Spotlight'

function App() {
    return (
        <div className="gradient-bg min-h-screen cursor-none relative overflow-hidden">
            <Spotlight />
            <Cursor />
            <Header />
            <Hero />
            <About />
            <Projects />
            <StyleGuide />
            <ResumeSection />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
