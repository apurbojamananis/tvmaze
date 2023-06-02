import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
