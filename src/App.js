import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";


function App() {
  return (
    <div className="App">
      < NavBar />
      < Hero />
    </div>
  );
}

export default App;
