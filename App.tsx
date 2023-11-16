import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logoInicioSky from './logoInicioSky.png'
import { TelaInicial } from './src/screens/TelaInicial';
import { Cadastro } from './src/screens/TelaCadastrar';
export default function App() {
  return (
    //<TelaInicial/>
    <Cadastro/>
  );
} 
