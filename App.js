import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CALCULADORA IMC</Text>
      <Image style={styles.imagen} source={{uri:"https://conduccionistpet.com/wp-content/uploads/2024/01/LOG2-768x756.png"}}/>
      <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su peso(kg):'></TextInput>
      <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su altura(m):'></TextInput>
      <Button title='Calcular' onPress={()=>{
        Alert.alert("Información","Felicidades, tu primera alerta");
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width:100,
    height:50
  },
  textInput:{
    borderColor:"#000000",
    borderRadius:7,
    borderWidth:3
  }
});
