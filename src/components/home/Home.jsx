import Card from "../card/Card";
import CardThree from "../card/CardThree";
import CardTwo from "../card/CardTwo";
import Facelity from "../facelity/Facelity";
import Footer from "../footer/Footer";
import HeroSection from "../hero/HeroSection";
import HeroSectionTwo from "../hero/HeroSectionTwo";
import Navbar from "../navbar/Navbar";
import Subscript from "../subscript/Subscript";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Facelity/>
            <Card/>
            <HeroSectionTwo/>
            <CardTwo/>
            <CardThree/>
            <Subscript/>
            <Footer/>
        </div>
    );
};

export default Home;