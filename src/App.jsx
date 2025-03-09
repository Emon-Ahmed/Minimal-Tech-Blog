import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
