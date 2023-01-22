import Header from "../../components/Header/Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMinusCircle,
	faPlusCircle,
	faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card/Card.js";
import { useContext, useEffect, useState } from "react";
import SquareButton from "../../components/SquareButton/SquareButton.js";
import dayjs from "dayjs";
import AuthContext from '../../contexts/auth.js';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [movements, setMovements] = useState([]);

  const { user, setToken, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  let total = 0;

  useEffect(() => {
    axios.get('/movements')
      .then(({data}) => setMovements(data));
  }, []);

  total = movements.reduce((acc, movement) => {
    return movement.type === 'entry' ?
      acc + movement.value :
      acc - movement.value;
  }, 0);

  const onLogout = () => {
    setToken(null);
    setUser(null);
    navigate('/');
  }

	return (
		<>
			<Header>
				<h1>Olá, {user.name.split(' ')[0]}</h1>
				<FontAwesomeIcon icon={faSignOut} size="2x" onClick={onLogout} />
			</Header>

			<Card className={movements.length <= 0 ? "empty" : false}>
				{movements.length > 0 ? (
					<>
						<div className="list-movements">
							{movements.map((movement, i) => {
								return (
									<div className="row" key={`${movement.type}-${i}`}>
										<p>
											<span className="date">
												{dayjs(movement.date).format("DD/MM")}
											</span>
											{movement.description}
										</p>
										<p className={`text-${movement.type}`}>
											{movement.value.toFixed(2).replace('.', ',')}
										</p>
									</div>
								);
							})}
						</div>
						<div>
							<div className="row">
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
				<SquareButton link="/nova-entrada">
					<FontAwesomeIcon icon={faPlusCircle} size="lg" />
					<p>Nova entrada</p>
				</SquareButton>
				<SquareButton link="/nova-saida">
					<FontAwesomeIcon icon={faMinusCircle} size="lg" />
					<p>Nova saída</p>
				</SquareButton>
			</div>
		</>
	);
}
