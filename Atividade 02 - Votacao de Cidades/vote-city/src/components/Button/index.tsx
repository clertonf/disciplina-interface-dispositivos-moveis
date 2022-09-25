import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: ButtonProps){
  return(
    <S.Container onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
