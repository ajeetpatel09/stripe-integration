import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import SignUp from "./components/signup/SignUp";

function App() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token != null) {
      navigate("/products");
    }
  }, []);

  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
