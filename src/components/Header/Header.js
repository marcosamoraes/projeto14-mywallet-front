import { Header as HeaderStyled } from "./Header.styled.js";

export default function Header(props) {
	return <HeaderStyled>{props.children}</HeaderStyled>;
}
