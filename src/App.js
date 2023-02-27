import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Main from "./pages/Main";
import Shop from "./pages/Shop";


function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className="my-5 py-5">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/shop/details/:itemId' element={<Details />} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
