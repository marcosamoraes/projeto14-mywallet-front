import { LinkStyled, SquareButton as SquareButtonStyled } from "./SquareButton.styled.js";

export default function SquareButton(props) {
	return (
    <LinkStyled to={props.link}>
      <SquareButtonStyled {...props} />
    </LinkStyled>
  );
}
