import Button from "./components/Button/index.jsx";
import { Home } from "./pages/home/";
import { Login } from "./pages/login/"
import Feed  from "./pages/feed"
import Register from "./pages/register/index.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/feed" element={ <Feed />} />
      <Route path="/register" element={ <Register />} />
    </Routes>
  </Router>
  );
}

export default App;
