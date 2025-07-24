import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Container } from "../../componentes/container/container"
import { styles } from "./tareas.styles";

export const Tarea = () => {
    const [texto, setTexto] = useState("");

    return (
    <Container>
        <View style={styles.mainView}>
            <Text style={styles.title}>Gestión de tareas con SQLite</Text>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setTexto(text)}
                    onSubmitEditing={() => console.log("Estás enviando")}
                    placeholder="Ingrese la tarea"
                    placeholderTextColor="#999"
                />
            </View>
            
            <ScrollView style={styles.scrollView}>
                <View style={[styles.sectionContainer, styles.todoSection]}>
                    <Text style={[styles.sectionTitle, styles.todoSectionTitle]}>
                        Tareas por hacer
                    </Text>
                    {/* Item de tareas por hacer */}
                    <Text style={styles.emptyMessage}>
                        No hay tareas pendientes
                    </Text>
                </View>
                
                <View style={[styles.sectionContainer, styles.completedSection]}>
                    <Text style={[styles.sectionTitle, styles.completedSectionTitle]}>
                        Tareas realizadas
                    </Text>
                    {/* Item de tareas realizadas */}
                    <Text style={styles.emptyMessage}>
                        No hay tareas completadas
                    </Text>
                </View>
            </ScrollView>
        </View>
    </Container>
);
}