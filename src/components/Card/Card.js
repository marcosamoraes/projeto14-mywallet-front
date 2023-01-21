import { Card as CardStyled } from "./Card.styled.js";

export default function Card(props) {
	return <CardStyled {...props}>{props.children}</CardStyled>;
}
