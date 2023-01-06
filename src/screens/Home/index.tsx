import {
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const partcipants = ["Lucas", "Vinicius", "Karla", "Rodrigo"];

  function handleParticipantAdd() {
    console.log("Adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clickou para remover o candidato ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 3 de agosto</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do candidato"
          placeholderTextColor="#a1a1a1"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant
        name="Lucas"
        onRemove={() => handleParticipantRemove("Lucas")}
      />
    </View>
  );
}
