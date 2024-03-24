import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio02 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.filho, { backgroundColor: "orange" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filho: {
    height: 50,
    width: 50,
    margin: "auto",
  },
});

export default Exercicio02;