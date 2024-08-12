import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import ShoppingContext from "./context/shoppingContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <ShoppingContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<InfoPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </ShoppingContext>
    </>
  );
} 

export default App;
