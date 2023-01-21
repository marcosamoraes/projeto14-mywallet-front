import Header from "../../components/Header/Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card/Card.js";
import { useState } from "react";
import SquareButton from "../../components/SquareButton/SquareButton.js";

export default function Home() {
  const [entries, setEntries] = useState([]);

  return (
		<>
			<Header>
				<h1>Olá, Fulano</h1>
				<FontAwesomeIcon icon={faSignOut} size="2x" onClick={null} />
			</Header>

			<Card className={entries.length <= 0 ? 'empty' : false}>
        {entries.length > 0 ? (
          <p>Loading...</p>
        ) : (
          <p>Não há registros de entrada ou saída</p>
        )}
      </Card>

      <div className="d-flex gap-15">
        <SquareButton onClick={null}>
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
          <p>Nova entrada</p>
        </SquareButton>
        <SquareButton>
          <FontAwesomeIcon icon={faMinusCircle} size="lg" />
          <p>Nova saída</p>
        </SquareButton>
      </div>
		</>
	);
}
