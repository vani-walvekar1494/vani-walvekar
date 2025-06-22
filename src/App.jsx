import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection';
import NavBar from './components/NavBar.jsx';

const App = () => {
    return (
        <>
       <NavBar />
        <Hero/>
            <ShowcaseSection />
        </>
    )
}
export default App
