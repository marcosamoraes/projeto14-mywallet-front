import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import Input from "../../components/Input/Input.js";
import Logo from "../../components/Logo/Logo.js";

export default function Login() {
  return (
    <>
      <Logo />
      <form onSubmit={null}>
        <Input type="email" name="email" id="email" placeholder="E-mail" />
        <Input type="password" name="password" id="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <p>Primeira vez? <Link to="/cadastro">Cadastre-se!</Link></p>
      </form>
    </>
  )
}