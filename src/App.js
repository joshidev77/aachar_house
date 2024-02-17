import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductQuantityButton from "./Components/ProductQuantityButton";
import ProductPage from "./Components/Product";

function App() {
  return (
    <>
      <Header />
      {/* <ProductQuantityButton /> */}
      <ProductPage/>
      
      <Footer />
    </>
  );
}

export default App;
