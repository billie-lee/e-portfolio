import "./App.css";
import Navbar from "./navigation/Navbar";
import AboutMe from "./pages/AboutMe";
import AdditionalArtifact from "./pages/AdditionalArtifact";
import Reflection from "./pages/Reflection";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col text-white">
        <Navbar />
        <div className="container mx-auto px-6 pt-16 flex-1 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
            WIL Placement
          </h2>
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
            E-Portfolio
          </h2>
        </div>
        <AboutMe />
        <Reflection />
        <Skills />
        <AdditionalArtifact />
      </div>
    </>
  );
};

export default App;
