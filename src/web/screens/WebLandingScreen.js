import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import gettingIcon from "../../assets/images/Getting.svg";
import looktao from "../../assets/images/looktao.svg";

const WebLandingScreen = () => {

  return (
    <View style={styles.container} >
      <View style={styles.button} onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }>
        <Text style={styles.leaderTxt}>Leaderboard</Text>
      </View>
      <View>
        <Text style={styles.title}>LEADER <br></br>
         BOARD SCORE</Text>
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
    width: "384px",
    height: "356px",
    left: "79.64%",
    right: "0.36%",
    top: "18px",
    bottom: "65.37%",
  },
  title: {
    position: "absolute",
    width: "1131px",
    height: "266px",
    color: "#151515",
    fontSize: "110px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "133px",
    left: "96px",
    top: "217px"
  },
  looktao: {
    position: "absolute",
    width: "911.62px",
    height: "606.4px",
    left: "1019.04px",
    top: "343px",
  },
  button: {
    position: "absolute",
    width: "500px",
    height: "110px",
    top: "695px",
    left: "96px",
    justifyContent: "center",
    borderRadius: 200,
    backgroundColor: "#FF5B4A",
    cursor: 'pointer'
  },
  leaderTxt: {
    color: "#FFFFFF",
    fontSize: "48px",
    fontWeight: "400px",
    lineHeight: "56px",
    textAlign: "center"
  }
});

export default WebLandingScreen;
