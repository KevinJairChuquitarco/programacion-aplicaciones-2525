import { useState, useEffect } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { Container } from "../../componentes/container/container";
import { styles } from "./tareas.styles";
import { Item } from "../../componentes/item/item";
import { agregarItem } from "../../servicios/database";
import { marcarItemCompletado } from "../../servicios/database";
import { eliminarItem } from "../../servicios/database";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback } from "react";

export const Tarea = () => {
  const db = useSQLiteContext();
  const [texto, setTexto] = useState("");
  const [itemsPorHacer, setItemsPorHacer] = useState([]);
  const [itemsCompletados, setItemsCompletados] = useState([]);

  const recargarItems = useCallback(() => {
    async function recargar() {
      await db.withExclusiveTransactionAsync(async () => {
        setItemsPorHacer(
          await db.getAllAsync("SELECT *FROM items WHERE done = ?", false)
        );
        setItemsCompletados(
          await db.getAllAsync("SELECT *FROM items WHERE done = ?", true)
        );
      });
    }
    recargar();
  }, [db]);

  useEffect(() => {
    recargarItems();
  }, []);

  return (
    <Container>
      <View style={styles.mainView}>
        <Text style={styles.title}>Gestión de tareas con SQLite</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setTexto(text)}
            onSubmitEditing={async () => {
              await agregarItem(db, texto);
              recargarItems();
              setTexto("");
            }}
            placeholder="Ingresa la tarea"
            value={texto}
          />
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={[styles.sectionContainer, styles.todoSection]}>
            <Text style={[styles.sectionTitle, styles.todoSectionTitle]}>
              Tareas por hacer
            </Text>
            {itemsPorHacer.length != 0 ? (
              itemsPorHacer.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onPressItem={async (id) => {
                    await marcarItemCompletado(db, id);
                    recargarItems();
                  }}
                />
              ))
            ) : (
              <Text style={styles.emptyMessage}>No hay tareas pendientes</Text>
            )}
          </View>

          <View style={[styles.sectionContainer, styles.completedSection]}>
            <Text style={[styles.sectionTitle, styles.completedSectionTitle]}>
              Tareas realizadas
            </Text>
            {itemsCompletados.length != 0 ? (
              itemsCompletados.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  onPressItem={async (id) => {
                    await eliminarItem(db, id);
                    recargarItems();
                  }}
                />
              ))
            ) : (
              <Text style={styles.emptyMessage}>No hay tareas completadas</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
