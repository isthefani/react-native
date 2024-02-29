import { View, Text } from 'react-native'
import React from 'react'

const Exercicio04 = () => {

    const alunos = ['Gabriel', 'Henrique', 'Jardel', 'Julio', 'Edilson', 'Gustavo', 'Isthefani']

  return (
    <View>
        {
            alunos.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))
        }
    </View>
  )
}

export default Exercicio04