import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";

type AuthContextProps = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});
const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
