import { View, Image } from "react-native";

export default function ViewImageScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#ff6961",
        }}
      ></View>
      <Image
        style={{ width: 400, height: 400 }}
        source={require("../assets/image.png")}
      ></Image>
    </View>
  );
}
