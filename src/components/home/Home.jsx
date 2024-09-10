import Card from "../card/Card";
import Facelity from "../facelity/Facelity";
import HeroSection from "../hero/HeroSection";
import Navbar from "../navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Facelity/>
            <Card/>
        </div>
    );
};

export default Home;