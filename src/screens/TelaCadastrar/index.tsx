import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Cadastro = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={[styles.texto1, { fontWeight: 'bold', fontSize: 24 }]}>Dados da assinatura</Text>
      <Text style={[styles.texto2, { fontSize: 16, color: '#8D8E96'  }]}>Informe o CPF ou CNPJ do assinante.</Text>
   
    <TextInput style={styles.input } placeholder='Digite só números.' />
    <TouchableOpacity style={styles.continuar}><Text style={[styles.textoContinuar, { color:'#8D8E96', fontSize: 18, fontWeight: 'bold' }]}>Continuar</Text></TouchableOpacity>

    <View style= {styles.footer}> 
    <Text style={[styles.texto3, {fontSize: 16 }]}>Já possui uma conta?  </Text>
    <Text style={[styles.texto4, { fontWeight: 'bold', fontSize: 17, color: '#D50F14' }]}>Fazer login</Text>
    </View>
    </View>
  );
} 