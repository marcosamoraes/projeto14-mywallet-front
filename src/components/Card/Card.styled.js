import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	height: calc(100vh - 230px);
	display: flex;
  flex-wrap: wrap;
  flex-direction: column;
	justify-content: space-between;
	background: white;
	border-radius: 5px;
	box-sizing: border-box;
  margin-bottom: 15px;
  padding: 25px 15px 5px 15px;

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

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;

    > p {
      color: black;
      margin: 0;
      margin-bottom: 20px;
      width: 70%;

      &:last-child {
        text-align: right;
        width: 30%;
      }

      > span.date {
        color: #C6C6C6;
        font-size: 16px;
        margin-right: 5px;
      }
    }

    > .text-entry {
      color: #03AC00;
    }

    > .text-output {
      color: #C70000;
    }
  }
`;
