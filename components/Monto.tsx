import React from 'react';
import { View, TextInput, Button, Picker, StyleSheet } from 'react-native';

export default function ({ consumo, setConsumo, porcentaje, setPorcentaje, calcularPropina }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Monto de consumo"
        keyboardType="numeric"
        value={consumo}
        onChangeText={setConsumo}
      />
      <Picker
        selectedValue={porcentaje}
        style={styles.picker}
        onValueChange={(itemValue) => setPorcentaje(itemValue)}
      >
        <Picker.Item label="10%" value={10} />
        <Picker.Item label="15%" value={15} />
        <Picker.Item label="20%" value={20} />
      </Picker>
      <Button title="Calcular Propina" onPress={calcularPropina} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
});