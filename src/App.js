import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import NavComponent from "./components/NavComponent";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Main from "./pages/Main";
import Shop from "./pages/Shop";


function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className="my-5 py-5 min-vh-100">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/shop/details/:itemId' element={<Details />} />
        <Route path="/about" element={<About />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
