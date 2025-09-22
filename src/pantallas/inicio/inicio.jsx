import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AppCard } from "../../componentes/appCard/appCard";
export const Inicio = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>KC</Text>
          </View>
          <Text style={styles.name}>Kevin Chuquitarco</Text>
          <Text style={styles.title}>Ingeniero de Software</Text>
          <Text style={styles.subtitle}>Master en Ciberseguridad</Text>
        </View>
      </View>

      {/* Sección de presentación */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Acerca de mí</Text>
          <Text style={styles.description}>
            Soy profesor de Desarrollo Web y Móvil en el Instituto Superior
            Tecnológico Mayor Pedro Traversari. Me especializo en crear
            experiencias digitales innovadoras y formar a la próxima generación
            de desarrolladores.
          </Text>
        </View>

        {/* Sección de aplicaciones */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Mis Desarrollos</Text>
          <Text style={styles.subtitle2}>
            Explora las aplicaciones que hemos desarrollado:
          </Text>

          {/* Card de la Calculadora IMC */}
          <AppCard
            icon="📊"
            title="Calculadora IMC"
            subtitle="Herramienta de Salud"
            description="Una aplicación intuitiva que permite calcular el Índice de Masa Corporal de manera rápida y precisa. Incluye categorización de resultados y recomendaciones personalizadas."
            buttonText="Ir a Calculadora IMC"
            onPress={() => navigation.navigate("CalculadoraIMC")}
          />

          {/* Card de la Consumo API */}

          <AppCard
            icon="💻"
            title="Consumo Api"
            subtitle="Herramienta Informativa"
            description="Aplicación que consume APIs externas para mostrar datos en tiempo real."
            buttonText="Ir a Consumo API"
            onPress={() => navigation.navigate("ConsumoAPI")}
          />
          {/* Card de SQLite */}

          <AppCard
            icon="🔡"
            title="SQLite"
            subtitle="Base de datos"
            description="Aplicación para gestionar las tareas usando SQLite, props y useState."
            buttonText="Ir a Gestión tareas"
            onPress={() => navigation.navigate("Tareas")}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Instituto Superior Tecnológico Mayor Pedro Traversari
          </Text>
          <Text style={styles.footerSubtext}>
            Formando profesionales del futuro digital
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#667eea",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileSection: {
    alignItems: "center",
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4a5568",
  },
  subtitle2: {
    fontSize: 16,
    color: "#718096",
    marginBottom: 20,
  },
  appCard: {
    backgroundColor: "#f7fafc",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#667eea",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  appIconText: {
    fontSize: 24,
  },
  appInfo: {
    flex: 1,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 2,
  },
  appSubtitle: {
    fontSize: 14,
    color: "#718096",
  },
  appDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4a5568",
    marginBottom: 20,
  },
  button: {
    borderRadius: 12,
    padding: 15,
    overflow: "hidden",
    backgroundColor: "#667eea",
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  buttonIcon: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4a5568",
    textAlign: "center",
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 12,
    color: "#718096",
    textAlign: "center",
  },
});
