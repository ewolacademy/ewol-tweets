import { useContext, useState } from "react";
import { registerUser } from "../../../../../api/users";
import Card from "../../../../components/Card";
import LoadingOverlay from "../../../../components/loaders/LoadingOverlay";
import Logo from "../../../../components/Logo";
import AppContext from "../../../../contexts/AppContext";
import RegisterForm from "../RegisterForm";
import "./styles.css";

const RegisterLayout = () => {
  const { data: appData, setData: setAppData } = useContext(AppContext);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = async (formData) => {
    const { name, photo } = formData;
    setSubmitLoading(true);
    await registerUser(name, photo);
    setSubmitLoading(false);

    // setAppData({
    //   ...appData,
    //   ...formData,
    // });
  };

  return (
    <div className="register-layout-container">
      <Logo width={200} />
      <Card className="card">
        <LoadingOverlay visible={submitLoading} />
        <span className="title">Bienvenidxs!</span>
        <span className="subtitle">Regístrate para poder twittear</span>
        <RegisterForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default RegisterLayout;
