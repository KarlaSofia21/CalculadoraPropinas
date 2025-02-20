import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Historial({ historial }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Cálculos</Text>
      <FlatList
        data={historial}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historialItem}>
            <Text>Consumo: ${item.consumo.toFixed(2)}</Text>
            <Text>Propina: {item.porcentaje}% (${item.propina.toFixed(2)})</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historialItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});