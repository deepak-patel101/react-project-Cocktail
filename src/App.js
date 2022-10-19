import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Nevbar from "./nevbar";

function App() {
  return (
    <>
      <Router>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />

          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
