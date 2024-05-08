import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mytoolbar from "./components/menu";
import Getnews from "./components/Getnews";
import Criptos from "./components/Criptos";
function App() {
  return (
    <>
      <Router>
        <Mytoolbar />
        <Routes>
          <Route path="/" element={<Criptos />} />
          <Route path="/CriptoNoticias" element={<Getnews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
