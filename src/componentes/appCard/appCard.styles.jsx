import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appCard: {
    backgroundColor: "#f7fafc",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 20,
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
    backgroundColor: "#667eea",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
