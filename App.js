//Librerías para la navegación
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Importo Pantallas
import { CalculadoraIMC } from "./src/pantallas/calculadoraIMC/calculadoraIMC";
import { Inicio } from "./src/pantallas/inicio/inicio";
import { ConsumoAPI } from "./src/pantallas/consumoAPI/consumoAPI";
import { DetailsApi } from "./src/pantallas/consumoAPI/datailsApi";
import { Tarea } from "./src/pantallas/tareas/tareas";
//Librerías SQLite
import { SQLiteProvider } from "expo-sqlite";
import { migrarBaseDatos } from "./src/servicios/database";

//Instanciar el Stack
const Stack = createStackNavigator();

export default function App() {

  return (
    <SQLiteProvider databaseName="database.db" onInit={migrarBaseDatos}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ title: "Inicio" }}
            name="Inicio"
            component={Inicio} />
          <Stack.Screen options={{ title: "Calculadora IMC" }}
            name="CalculadoraIMC"
            component={CalculadoraIMC} />
          <Stack.Screen options={{ title: "Consumo API" }}
            name="ConsumoAPI"
            component={ConsumoAPI} />
          <Stack.Screen options={{ title: "Detalles" }}
            name="Datails"
            component={DetailsApi} />

          <Stack.Screen options={{ title: "Gestión Tareas" }}
            name="Tareas"
            component={Tarea} />

        </Stack.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  );
}