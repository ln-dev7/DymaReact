import './App.scss'
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { seedRecipes } from './data/seed';

//seedRecipes()

function App() {
  return (
    <div className="d-flex flex-column app-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
