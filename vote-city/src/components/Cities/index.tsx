import React from "react";

import * as S from "./styles";

type CitiesProps = {
  nameCity: string;
  count: number;
  onPress: () => void;
}

export function Cities({nameCity, count = 0, onPress}: CitiesProps){
  return(
    <S.Container>
      <S.City>{nameCity}: {count}</S.City>
      <S.ButtonVoteCity title="Votar" onPress={onPress} />
    </S.Container>
  )
}
