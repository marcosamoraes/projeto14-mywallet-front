import Button from "../../components/Button/Button.js";
import Header from "../../components/Header/Header.js";
import Input from "../../components/Input/Input.js";

export default function ValuesOutput() {
	return (
		<>
			<Header>
				<h1>Nova entrada</h1>
			</Header>

			<form onSubmit={null}>
        <Input type="text" name="value" id="value" placeholder="Valor" />
        <Input type="text" name="description" id="description" placeholder="Descrição" />
        <Button type="submit">Salvar saída</Button>
      </form>
		</>
	);
}
