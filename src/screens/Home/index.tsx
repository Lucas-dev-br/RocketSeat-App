import {
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 3 de agosto</Text>

      <TextInput
        style={styles.input}
        placeholder="Olá"
        placeholderTextColor="#a1a1a1"
      />
      <TouchableOpacity>
        <Text style={styles.buttonText}>Clique AQui</Text>
      </TouchableOpacity>
    </View>
  );
}
