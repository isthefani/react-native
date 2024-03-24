import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio04 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.primeiro, { backgroundColor: "red" }]}></View>
      <View style={[styles.segundo, { backgroundColor: "green" }]}></View>
      <View style={[styles.terceiro, { backgroundColor: "blue" }]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    primeiro: {
      height: '50%',
      width: '50px',
    },
    segundo: {
      height: '50%',
      width: '50px',
    },
    terceiro: {
        height: '50%',
        width: '50px',
      }
})

export default Exercicio04