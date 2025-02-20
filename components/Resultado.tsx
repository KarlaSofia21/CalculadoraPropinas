import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Resultado({ consumo, porcentaje }) {
  const montoConsumo = parseFloat(consumo) || 0;
  const montoPropina = (montoConsumo * porcentaje) / 100;
  const totalPagar = montoConsumo + montoPropina;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Propina: ${montoPropina.toFixed(2)}</Text>
      <Text style={styles.text}>Total a Pagar: ${totalPagar.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});