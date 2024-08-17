import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SimplifySection from "./components/SimplifySection";
import Testimonials from "./components/Testimonials";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <SimplifySection />
            {/* <Footer /> */}
        </>
    );
}
