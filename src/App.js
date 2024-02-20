import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductQuantityButton from "./Components/ProductQuantityButton";
import ProductPage from "./Components/Product";

function App() {
  constructor(props) {
    super(props);
    this.state={
      users:[]
    }
  };
  return (
    <>
      <Header />
      <ProductPage/>
      {/* <ProductQuantityButton /> */}
      <Footer />
    </>
  );
}

export default App;
