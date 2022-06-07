import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import WebLandingScreen from "./src/web/screens/WebLandingScreen";
import MobileLandingScreen from "./src/mobile/screens/MobileLandingScreen";
import { useFonts } from "expo-font";
import StackNavigation from "./navigation/StackNavigation";
export default function App() {
  let [fontsLoaded] = useFonts({
    "Prompt-Bold": require("./src/assets/fonts/Prompt-Bold.ttf"),
    "Prompt-Light": require("./src/assets/fonts/Prompt-Light.ttf"),
    "Prompt-Regular": require("./src/assets/fonts/Prompt-Regular.ttf"),
    "Rambla-Regular": require("./src/assets/fonts/Rambla-Regular.ttf"),
    "Rambla-Bold": require("./src/assets/fonts/Rambla-Bold.ttf"),
    "RussoOne-Regular": require("./src/assets/fonts/RussoOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Default Screen</Text>
      </View>
    );
  }

  return (
    <StackNavigation>
      <View style={styles.container}>
        {Platform.OS === "web" && <WebLandingScreen />}
        {(Platform.OS === "android" || Platform.OS === "ios") && (
          <MobileLandingScreen />
        )}
        <StatusBar style="auto" />
      </View>
    </StackNavigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#ffffff",
    // backgroundColor: "pink",
  },
});
