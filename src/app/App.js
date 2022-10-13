import AppContextProvider from "./contexts/AppContext/AppContextProvider";
import "./global-styles.css";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <AppContextProvider>
      <RegisterPage />
      {/* <HomePage /> */}
    </AppContextProvider>
  );
}

export default App;
