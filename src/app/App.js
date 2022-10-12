import AppContextProvider from "./contexts/AppContext/AppContextProvider";
import "./global-styles.css";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <AppContextProvider>
      <RegisterPage />
    </AppContextProvider>
  );
}

export default App;
