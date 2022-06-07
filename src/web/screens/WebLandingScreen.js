import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import gettingIcon from "../../assets/images/Getting.svg";
import looktao from "../../assets/images/looktao.svg";

const WebLandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("Learner")}
      >
        <Text style={styles.leaderTxt}>Leaderboard</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>LEADER BOARD SCORE</Text>
      </View>
      <Image
        source={gettingIcon}
        style={styles.gettingIcon}
        resizeMode={"contain"}
      />
      <Image source={looktao} style={styles.looktao} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gettingIcon: {
    position: "absolute",
    width: 384,
    height: 356,
    left: "79.64%",
    right: "0.36%",
    top: 18,
    bottom: "65.37%",
  },
  title: {
    position: "absolute",
    width: 1131,
    height: 266,
    color: "#151515",
    fontFamily: "RussoOne-Regular",
    fontSize: 72,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 133,
    left: 96,
    top: 217,
  },
  looktao: {
    position: "absolute",
    width: 91162,
    height: "60.64%",
    left: "1019.04%",
    top: 343,
  },
  button: {
    position: "absolute",
    width: 500,
    height: 110,
    top: 695,
    left: 96,
    justifyContent: "center",
    borderRadius: 200,
    backgroundColor: "#FF5B4A",
    cursor: "pointer",
  },
  leaderTxt: {
    color: "#FFFFFF",
    fontFamily: "RussoOne-Regular",
    fontSize: 48,
    fontWeight: "400",
    lineHeight: 56,
    textAlign: "center",
  },
});

export default WebLandingScreen;
