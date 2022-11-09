// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import CardsDetails from "./component/CardsDetails";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
