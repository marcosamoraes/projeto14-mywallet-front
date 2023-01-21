import Header from "../../components/Header/Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMinusCircle,
	faPlusCircle,
	faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card/Card.js";
import { useState } from "react";
import SquareButton from "../../components/SquareButton/SquareButton.js";
import dayjs from "dayjs";

export default function Home() {
	const [entries, setEntries] = useState([
		{
			id: 1,
			description: "Description 1",
			value: 39.9,
			type: "output",
			date: "2023-01-10T00:00:00z",
		},
		{
			id: 2,
			description: "Description 2",
			value: 500.0,
			type: "entry",
			date: "2023-01-08T00:00:00z",
		},
	]);

  const total = entries.reduce((acc, entry) => {
    return entry.type === 'entry' ?
      acc + entry.value :
      acc - entry.value;
  }, 0);

	return (
		<>
			<Header>
				<h1>Olá, Fulano</h1>
				<FontAwesomeIcon icon={faSignOut} size="2x" onClick={null} />
			</Header>

			<Card className={entries.length <= 0 ? "empty" : false}>
				{entries.length > 0 ? (
					<>
						<div>
							{entries.map((entry) => {
								return (
									<div class="row">
										<p>
											<span className="date">
												{dayjs(entry.date).format("DD/MM")}
											</span>
											{entry.description}
										</p>
										<p className={`text-${entry.type}`}>
											{entry.value.toFixed(2).replace('.', ',')}
										</p>
									</div>
								);
							})}
						</div>
						<div>
							<div class="row">
								<p>
                  <b>SALDO</b>
								</p>
								<p className={`text-${total >= 0 ? 'entry' : 'output'}`}>
                  {total >= 0 ? total.toFixed(2).replace('.', ',') : (total * -1).toFixed(2).replace('.', ',')}
								</p>
							</div>
						</div>
					</>
				) : (
					<p>Não há registros de entrada ou saída</p>
				)}
			</Card>

			<div className="d-flex gap-15">
				<SquareButton link="nova-entrada">
					<FontAwesomeIcon icon={faPlusCircle} size="lg" />
					<p>Nova entrada</p>
				</SquareButton>
				<SquareButton link="nova-saida">
					<FontAwesomeIcon icon={faMinusCircle} size="lg" />
					<p>Nova saída</p>
				</SquareButton>
			</div>
		</>
	);
}
