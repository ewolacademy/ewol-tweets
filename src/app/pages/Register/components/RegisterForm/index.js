import { useState } from "react";
import Button from "../../../../components/Button";
import InputText from "../../../../components/InputText";

const RegisterForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState({});

  const handleInputTextNameChange = (e) => {
    setFormValue({
      ...formValue,
      name: e.target.value,
    });
  };

  const handleInputTextLastnameChange = (e) => {
    setFormValue({
      ...formValue,
      lastname: e.target.value,
    });
  };

  return (
    <div>
      <InputText
        placeholder="Nombre"
        value={formValue.name}
        onChange={handleInputTextNameChange}
      />
      <InputText
        placeholder="Apellido"
        value={formValue.lastname}
        onChange={handleInputTextLastnameChange}
      />
      <Button onClick={() => onSubmit(formValue)}>Guardar</Button>
    </div>
  );
};

export default RegisterForm;
