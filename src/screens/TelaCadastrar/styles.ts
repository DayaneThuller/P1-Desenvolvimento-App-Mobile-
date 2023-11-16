import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },

    continuar: {
        borderWidth: 1,
        borderColor: '#bebebe',
        backgroundColor: '#E1E3EA',
        borderRadius: 30,
        paddingTop: 25,
        paddingLeft: 150,
        paddingRight: 150,
        marginBottom: 400      
    },

    texto1: {
        textAlign: "center",
        marginBottom: 20,
        marginTop: 60
    },
    texto2: {
        textAlign: "center",
        marginBottom: 20,
        marginTop: -10
    },
    textoContinuar: {
        textAlign: "center",
        marginBottom: 20,
        marginTop: -10
    },

    input: {
        borderWidth: 1,
        borderColor: '#bebebe',
        borderRadius: 5,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 90,
        paddingRight: 90,
        marginBottom: 20
    },

    texto3: {
        
    },

    texto4: {

    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#bebebe',
        paddingTop: 10,
        width: '80%',
        flexDirection: "row",
        justifyContent: "center"
    }
})