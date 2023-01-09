import {
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const partcipants = [
    "Lucas",
    "Vinicius",
    "Karla",
    "Rodrigo",
    "Henrique",
    "Carlos",
    "Pedro",
    "Vincius",
    "Olá",
    "Tiago",
  ];

  function handleParticipantAdd() {
    if (partcipants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista"
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
      <FlatList
        data={partcipants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpetyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista!
          </Text>
        )}
      />
    </View>
  );
}
