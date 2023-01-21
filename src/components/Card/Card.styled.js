import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	height: calc(100vh - 230px);
	display: flex;
	justify-content: space-between;
	background: white;
	border-radius: 5px;
	box-sizing: border-box;
  margin-bottom: 15px;

	&.empty {
		justify-content: center;
		align-items: center;
		padding: 70px;

		> p {
			color: #868686;
			text-align: center;
			font-size: 20px;
		}
	}
`;
