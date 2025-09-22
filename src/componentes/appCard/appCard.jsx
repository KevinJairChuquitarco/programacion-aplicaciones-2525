import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./appCard.styles";
export const AppCard = (props) => {
  return (
    <View style={styles.appCard}>
      <View style={styles.appHeader}>
        <View style={styles.appIcon}>
          <Text style={styles.appIconText}>{props.icon}</Text>
        </View>
        <View style={styles.appInfo}>
          <Text style={styles.appTitle}>{props.title}</Text>
          <Text style={styles.appSubtitle}>{props.subtitle}</Text>
        </View>
      </View>

      <Text style={styles.appDescription}>{props.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
