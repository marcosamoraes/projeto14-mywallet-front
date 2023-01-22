import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.js";
import Input from "../../components/Input/Input.js";
import Logo from "../../components/Logo/Logo.js";
import { useCallback, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../contexts/auth.js";

export default function Login() {
  const [ form, setForm ] = useState({
    email: "",
    password: "",
  });
  const [ error, setError ] = useState(null);

  const { setToken, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/authenticate', form);
      setToken(data.token);
      setUser(data.user);
      navigate('/home');
    } catch (error) {
      setError(error.response.data);
    }
  }

  const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
    ...form,
    [name]: value,
  }), [form, setForm])

  return (
    <div className="center">
      <Logo />
      <form onSubmit={onSubmit}>
        <Input type="email" name="email" id="email" placeholder="E-mail" onChange={handleInputChange} />
        <Input type="password" name="password" id="password" placeholder="Senha" onChange={handleInputChange} />
        <Button type="submit">Entrar</Button>
        {error ? (<p className="error">{error}</p>) : false}
        <p>Primeira vez? <Link to="/cadastro">Cadastre-se!</Link></p>
      </form>
    </div>
  )
}