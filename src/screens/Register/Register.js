import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import Input from "../../components/Input/Input.js";
import Logo from "../../components/Logo/Logo.js";

export default function Register() {
  return (
    <>
      <Logo />
      <form onSubmit={null}>
        <Input type="text" name="name" id="name" placeholder="Nome" />
        <Input type="email" name="email" id="email" placeholder="E-mail" />
        <Input type="password" name="password" id="password" placeholder="Senha" />
        <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme a senha" />
        <Button type="submit">Cadastrar</Button>
        <p>Já tem uma conta? <Link to="/">Entre agora!</Link></p>
      </form>
    </>
  )
}