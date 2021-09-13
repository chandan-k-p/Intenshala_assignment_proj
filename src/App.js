import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Slider from "./components/Home/Slider";
import { sliderData } from "./components/Home/SliderData";
import SignUp from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="App border">
      <Navbar />

      <Switch>
        <Route path="/home">
          <Slider slides={sliderData} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
