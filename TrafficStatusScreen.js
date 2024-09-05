// TrafficStatusScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TrafficStatusScreen() {
  const [trafficStatus, setTrafficStatus] = useState('Cargando...');

  useEffect(() => {
    // Aquí se simula una llamada a la API
    setTimeout(() => {
      setTrafficStatus('Tráfico moderado');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del Tráfico</Text>
      <Text style={styles.status}>{trafficStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    color: 'green',
  },
});

export default TrafficStatusScreen;

// Actualización en App.js para incluir la nueva pantalla
import TrafficStatusScreen from './screens/TrafficStatusScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="TrafficStatus" component={TrafficStatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
