import { useState } from 'react';
import { StyleSheet, Text, View, Image, 
  TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [peso, setPeso] =useState();
  const [altura, setAltura] = useState();

  return (
    <View style={styles.container}>
      <Text>CALCULADORA IMC</Text>
      <Image style={styles.imagen} source={{ uri: "https://conduccionistpet.com/wp-content/uploads/2024/01/LOG2-768x756.png" }} />
      <TextInput onChangeText={(value)=>setPeso(value)} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su peso(kg):'></TextInput>
      <TextInput onChangeText={(value)=>{
        setAltura(value);
        console.log(altura);
      }} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su altura(m):'></TextInput>
      <Button title='Calcular' onPress={() => {
        Alert.alert("Información", "Felicidades, tu primera alerta");
      }}></Button>
    </View>
  );
}

const calcularIMC = (peso, altura) =>{
  let imc = peso/(altura*altura);
  return imc.toFixed(2);
}

const calcularNivelPeso = (peso, altura) => {
  let imc = calcularIMC(peso,altura);
  let respuesta = "";
  if(imc < 18.5){
    respuesta = "Su IMC es: " + imc + "y tiene Bajo peso";
  }
  if(imc>=18.5 && imc<=24.9){
    respuesta = "Su IMC es: " + imc + "y tiene peso Normal";
  }

  if(imc>=25 && imc<=29.9){
    respuesta = "Su IMC es: " + imc + "y tiene 	Sobrepeso";
  }

  if(imc>30){
    respuesta = "Su IMC es: " + imc + "y tiene 	Obesidad";
  }

  return respuesta;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 100,
    height: 50
  },
  textInput: {
    borderColor: "#000000",
    borderRadius: 7,
    borderWidth: 3
  }
});
