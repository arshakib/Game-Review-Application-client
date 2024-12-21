import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import { useState } from "react";
import "./index.css";

function App() {
  const userData = useLoaderData();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    document.body.className = checked ? "dark-mode" : "light-mode";
    console.log(document.body.className);
  };

  return (
    <>
      <div className="dark">
        <div className="w-11/12 mx-auto">
          <Nav
            userData={userData}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          ></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
