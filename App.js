import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Container} from "native-base";
import Forms from "./src/screens/Forms";

export default function App() {

  return (
    <Container style={styles.fondo}>
      <Forms />
    </Container>
  )
}

const styles = StyleSheet.create({
    fondo:{
      backgroundColor: "#000000",
    },
})

