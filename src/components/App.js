import Home from "./Home";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateContact from "./CreateContact";
import Update from "./Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/create-contact" element={<CreateContact />}></Route>
        <Route path="/update-contact/:id" element={<Update />}></Route>
      </Routes>
    </Router>
  );
}

export default connect()(App);
