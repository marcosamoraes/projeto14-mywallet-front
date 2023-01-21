import Button from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import Input from "../../components/Input/Input.js";

export default function ValuesEntry() {
	return (
		<>
			<Header>
				<h1>Nova entrada</h1>
			</Header>

			<form onSubmit={null}>
        <Input type="text" name="value" id="value" placeholder="Valor" />
        <Input type="text" name="description" id="description" placeholder="Descrição" />
        <Button type="submit">Salvar entrada</Button>
      </form>
		</>
	);
}
