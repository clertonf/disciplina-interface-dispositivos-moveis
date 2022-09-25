import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import { Cities } from "../../components/Cities";

import * as S from "./styles";

type CityProps = {
  nameCity: string;
  value: number;
}

export function Home() {

  const [fortaleza, setFortaleza] = useState(0);
  const [quixada, setQuixada] = useState(0);
  const [caninde, setCaninde] = useState(0);

  function voteCity(value: number) {
    switch (value) {
      case 1:
        return setFortaleza(fortaleza + 1);

      case 2:
        return setQuixada(quixada + 1);

      case 3:
        return setCaninde(caninde + 1);

      default:
        break;
    }
  }

  function showCityWin() {
    const allValues = [
      { nameCity: 'Fortaleza', value: fortaleza },
      { nameCity: 'Quixadá', value: quixada },
      { nameCity: 'Canindé', value: caninde },
    ] as CityProps[];


    const result = allValues.reduce(function getMaxValue(prev, current) {
      return (prev.value > current.value) ? prev : current
    })


    if (result.value === 0) {
      Alert.alert('Nenhuma cidade foi votada');
      return;
    }

    Alert.alert(`A cidade vencedora foi: ${result.nameCity} com total de
    ${result.value} voto(s)`);

    //Vou ficar devendo o empate
    //Verify has values duplicates for Alert show 'empate'

    // let seen = new Set();

    // const hasDuplicates = allValues.some(function (currentObject) {
    //   return seen.size === seen.add(currentObject.value).size;
    // })
  }

  function resetValues() {
    setFortaleza(0);
    setQuixada(0);
    setCaninde(0);
  }

  return (
    <S.Container>
      <S.Title>Escolha qual cidade você deseja votar!</S.Title>

      <S.Footer>
        <Cities nameCity="Fortaleza" count={fortaleza} onPress={() => voteCity(1)} />
        <Cities nameCity="Quixadá" count={quixada} onPress={() => voteCity(2)} />
        <Cities nameCity="Canindé" count={caninde} onPress={() => voteCity(3)} />

        <S.WrapperButtons>
          <S.ButtonShowCityWin title="Exibir cidade vencedora" onPress={showCityWin} />
          <S.ButtonResetValues title="Resetar valores" onPress={resetValues} />
        </S.WrapperButtons>
      </S.Footer>
    </S.Container>
  )
}
