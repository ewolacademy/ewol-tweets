import Button from "../../../../components/Button";

const UserWelcome = ({ name, onLogout }) => {
  return (
    <div>
      <span>Bienvenido {name}!</span>
      <Button onClick={onLogout}>Salir</Button>
    </div>
  );
};

export default UserWelcome;
