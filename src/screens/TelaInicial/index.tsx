import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logoInicioSky from '../../../assets/logoInicioSky.png'


export const TelaInicial = () => {
    return (
        <View style={styles.viewContainer}>
      <Image source={logoInicioSky} style={styles.logoInicioSky} />
      <Text style={[styles.texto1, { fontWeight: 'bold', fontSize: 24 }]}>Entre na conta</Text>
      <Text style={[styles.texto2, { fontSize: 16, color: '#8D8E96'  }]}>Informe seus dados cadastrados.</Text>
   
    <TextInput style={styles.input} placeholder='Digite o e-mail ou nº do celular.' />
    <TouchableOpacity style={styles.continuar}><Text style={[styles.textoContinuar, { color:'#8D8E96', fontSize: 18, fontWeight: 'bold' }]}>Continuar</Text></TouchableOpacity>

    <View style= {styles.footer}> 
    <Text style={[styles.texto3, {fontSize: 16 }]}>É seu primeiro acesso?  </Text>
    <Text style={[styles.texto4, { fontWeight: 'bold', fontSize: 17, color: '#D50F14' }]}>Cadastrar</Text>
    </View>
    </View>
    )
}