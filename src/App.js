import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <SocialLink/>
    </div>
  );
}

export default App;
