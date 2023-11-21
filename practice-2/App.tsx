import { useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/backGround.png")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          style={{ width: 100, height: 100, alignSelf: "center", flex: 0.2 }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
