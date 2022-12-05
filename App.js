import { View, StyleSheet, StatusBar} from "react-native";
import MainScreen from "./src/screens/MainScreen";

export default function App(){
  
  return(
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%'
  }
})