import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Main from "./components/layout/Main/Main";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "./global-bootstrap-italia";
import "owl.carousel";
import "bootstrap-italia";

function App() {
  return (
    <BrowserRouter>
      <div id="page-front">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
