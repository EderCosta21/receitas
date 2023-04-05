import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../componentes/logo";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da Comida..."
        />
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#4cbe6c" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  input: {
    width:'95%',
    maxHeight:'95%',
    height:40,
  },
  form: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ececec",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
  },
});
