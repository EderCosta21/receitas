import { View, Text, StyleSheet } from "react-native";

export function Home() {
  return (
    <View style={styles.container}> 
      <Text>Pagina Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#c2c2c2'
    }
})
