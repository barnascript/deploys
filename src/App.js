import {
  Home,
  About,
  ContactPage,
  CreateAccountPage,
  Login,
  Pricing,
  FeaturesPage,
} from "./exports/pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/signup" element={<CreateAccountPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/features" element={<FeaturesPage />} />
      </Routes>
    </div>
  );
}

export default App;
