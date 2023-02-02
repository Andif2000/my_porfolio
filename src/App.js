import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>

      <SocialLink/>
    </div>
  );
}

export default App;
