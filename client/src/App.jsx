import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import ShoppingContext from "./context/shoppingContext";

function App() {
  return (
    <>
      <ShoppingContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/info/:id"
            element={<InfoPage />}
          />
        </Routes>
      </ShoppingContext>
    </>
  );
}

export default App;
