import styled from "styled-components/native";
import { Button } from "../Button";

export const Container = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const City = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #111;
  margin-bottom: 10px;
`;

export const ButtonVoteCity = styled(Button)`
  max-width: 100px;
  max-height: 30px;
  background-color: white;
`;
