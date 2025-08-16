import { Routes, Route } from "react-router-dom";
import AgencyPortfolio from "./pages/AgencyPortfolio";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AgencyPortfolio />} />
      <Route path="/privacy" element={<Privacy />} />
       <Route path="/terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
}

export default App;

