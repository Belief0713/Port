import "./index.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Hero from "./common/Hero";
import Count from "./common/Count";
import About from "./common/About";
import Project from "./common/Project";
import MoreProject from "./common/MoreProject";
import Skill from "./common/Skill";
import History from "./common/History";
import Testimonial from "./common/Testimonial";
import Contact from "./common/Contact";

function App() {
  return (
    <div className='App'>
      <>
        <Header />
        <main>
          <Hero />
          {/* <About /> */}
          {/* <Count /> */}
          <Project />
          <MoreProject />
          <History/>
          <Skill />
          {/* <Testimonial /> */}
          <Contact />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
