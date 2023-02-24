import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import AppRouter from "./config/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
