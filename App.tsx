/*import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Aplicacion 5C</Text>
      <ActivityIndicator/>
      <Text>Ejemplo de app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'#4B2E1E'
  }
});*/

/*import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from './app/screens/Header';
import Carousel from './app/screens/Carousel';
import Collage from './app/screens/Collage';
import BottomMenu from './app/screens/BottomMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Carousel />
        <Collage />
      </ScrollView>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});*/
/*import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./app/Components/Header";
import Foother from "./app/Components/Foother";
import Login from "./app/screens/Login";

export default function App() {
  return (
    <View style={estilos.container}>
      <Header
        titulo="Calculadora"
        nombre="Karla Sofia Morales"
        imagen={require('./assets/img1.jpg')}
      />

      <Login />
      
      <Foother
        fecha="2021"
        telefono="123-456-7890"
      />
    </View>

  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: '#4B2E1E',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#EDE0D4',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  labels: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4B2E1E'
  },
  cajas: {
    borderWidth: 3,
    borderRadius: 7,
    borderColor: '#4B2E1E',
    padding: 10,
    marginVertical: 10
  }
})*/
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Monto from './components/Monto';
import Resultado from './components/Resultado';
import Historial from './components/Historial';

export default function App() {
  const [consumo, setConsumo] = useState('');
  const [porcentaje, setPorcentaje] = useState(15);
  const [historial, setHistorial] = useState([]);

  const calcularPropina = () => {
    const montoConsumo = parseFloat(consumo);
    const montoPropina = (montoConsumo * porcentaje) / 100;
    const totalPagar = montoConsumo + montoPropina;

    const nuevoCalculo = {
      consumo: montoConsumo,
      porcentaje: porcentaje,
      propina: montoPropina,
      total: totalPagar,
    };

    setHistorial([nuevoCalculo, ...historial]);
  };

  return (
    <ScrollView style={styles.container}>
      <Monto
        consumo={consumo}
        setConsumo={setConsumo}
        porcentaje={porcentaje}
        setPorcentaje={setPorcentaje}
        calcularPropina={calcularPropina}
      />
      <Resultado consumo={consumo} porcentaje={porcentaje} />
      <Historial historial={historial} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
