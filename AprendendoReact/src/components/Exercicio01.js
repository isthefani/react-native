import { View, Text } from 'react-native'
import React from 'react'

const Exercicio01 = ({nome}) => {
  return (
    <View>
      <Text>Olá, bem-vindo(a), {nome}.</Text>
    </View>
  )
}

export default Exercicio01