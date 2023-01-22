import { useState } from "react";
import Button from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import Input from "../../components/Input/Input.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ValuesEntry() {
  const [ form, setForm ] = useState({
    value: 0.00,
    description: "",
  });
  const [ error, setError ] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/movements/entry', form);
      navigate('/home');
    } catch (error) {
      setError(error.response.data);
    }
  }

	return (
		<>
			<Header>
				<h1>Nova entrada</h1>
			</Header>

			<form onSubmit={onSubmit}>
        <Input type="text" name="value" id="value" placeholder="Valor" onChange={e => setForm({...form, value: Number(e.target.value.replace(',', '.'))})} data-test="registry-amount-input" />
        <Input type="text" name="description" id="description" placeholder="Descrição" onChange={e => setForm({...form, description: e.target.value})} data-test="registry-name-input" />
        <Button type="submit" data-test="registry-save">Salvar entrada</Button>
        {error ? (<p className="error">{error}</p>) : false}
      </form>
		</>
	);
}
