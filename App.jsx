import { Link, Route, Routes } from "react-router-dom";
import Login from "./login";
import Contact from "./contact";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Link to="/">Home</Link>
      <Link to="/login">Login page</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
}

export default App;
