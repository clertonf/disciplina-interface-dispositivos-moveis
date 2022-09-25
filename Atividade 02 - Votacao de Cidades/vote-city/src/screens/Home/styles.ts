import styled from "styled-components/native";
import { Button } from "../../components/Button";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 30px;
`;

export const WrapperButtons = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonShowCityWin = styled(Button)`
  background-color: #28B164;
`;

export const ButtonResetValues = styled(Button)`
  background-color: #F08080;
`;

