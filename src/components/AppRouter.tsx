import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../App";
import { About } from "./About";
import { Login } from "./Login";
import { Main } from "./Main";

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/*" element={<Navigate to="/Main" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/Login" />} />
    </Routes>
  );
};
