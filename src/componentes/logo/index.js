import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.Arealogo}>
      <Text style={styles.logo}>Receita Facil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    Arealogo: {
    backgroundColor: "#4CBE6C",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 20,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 60,
    marginBottom:8,
  },
  logo:{
    color: "white",
    fontSize:22,
    fontWeight:"bold",
  }
});
