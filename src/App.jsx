import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection';
import NavBar from './components/NavBar.jsx';
import {LogoSection} from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";

const App = () => {
    return (
        <>
       <NavBar />
        <Hero/>
            <ExperienceSection />
            <ShowcaseSection />
            <LogoSection />            
            <FeatureCards />            
            <TechStack />
        </>
    )
}
export default App
