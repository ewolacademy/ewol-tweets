import { useContext } from "react";
import Card from "../../../../components/Card";
import AppContext from "../../../../contexts/AppContext";
import RegisterForm from "../RegisterForm";
import UserWelcome from "../UserWelcome";
import "./styles.css";

const RegisterLayout = () => {
  const { data: appData, setData: setAppData } = useContext(AppContext);

  const handleSubmit = (formData) => {
    setAppData({
      ...appData,
      ...formData,
    });
  };

  const handleLogout = () => {
    setAppData({
      ...appData,
      name: undefined,
    });
  };

  return (
    <div className="register-layout-container">
      <Card>
        {appData.name ? (
          <>
            <UserWelcome name={appData.name} onLogout={handleLogout} />
          </>
        ) : (
          <RegisterForm onSubmit={handleSubmit} />
        )}
      </Card>
    </div>
  );
};

export default RegisterLayout;
