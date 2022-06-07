import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native"
import WebLandingScreen from "./src/web/screens/WebLandingScreen"
import MobileLandingScreen from "./src/mobile/screens/MobileLandingScreen"

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
