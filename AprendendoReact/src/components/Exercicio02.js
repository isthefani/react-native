import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio02 = () => { 
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1);
    }
    function decrementar() {
        setContador(contador - 1)
    }
  return (
    <View>
      <Button title="Incrementar" onPress={incrementar}/>
      <Text>O contador está em: {contador}</Text>
      <Button title="Decrementar" onPress={decrementar}/>
    </View>
  )
}

export default Exercicio02