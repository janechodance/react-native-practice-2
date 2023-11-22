import { useRouter } from "expo-router";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/backGround.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 70,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text style={{ fontSize: 24 }}>Welcome to The Colors of Elephant</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#ff6961",
          height: 70,
          width: "100%",
        }}
        onPress={() => router.push("screens/ViewImageScreen")}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#7ec4cf",
          height: 70,
          width: "100%",
        }}
        onPress={() => router.push("/screens/WelcomeScreen")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
