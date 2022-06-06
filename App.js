import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import WebLandingScreen from "./src/web/screens/WebLandingScreen";
import MobileLandingScreen from "./src/mobile/screens/MobileLandingScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Prompt-Bold": require("./src/assets/fonts/Prompt/Prompt-Bold.ttf"),
    "Prompt-Light": require("./src/assets/fonts/Prompt/Prompt-Light.ttf"),
    "Prompt-Regular": require("./src/assets/fonts/Prompt/Prompt-Regular.ttf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        {Platform.OS === "web" && <WebLandingScreen />}
        {(Platform.OS === "android" || Platform.OS === "ios") && (
          <MobileLandingScreen />
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
  return (
    <View>
      <Text style={{ fontFamily: "Prompt-Bold" }}>Default Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
