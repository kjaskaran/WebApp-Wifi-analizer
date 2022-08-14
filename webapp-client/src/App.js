import "./App.css";

import { Route, Routes, browserHistory } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactsPage } from "./Pages/ContactsPage";
import { ContentPage } from "./Pages/ContentPage";
import { NavBar } from "./Pages/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes history={browserHistory}>
        <Route path="/home" element={<HomePage />}>
          Home
        </Route>
        <Route path="/about" element={<AboutPage />}>
          About
        </Route>
        <Route path="/content" element={<ContentPage />}>
          Events
        </Route>
        <Route path="/contact" element={<ContactsPage />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

export default App;
