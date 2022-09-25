import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  height: 40px;
  background-color: #bbb;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #111;
`;
