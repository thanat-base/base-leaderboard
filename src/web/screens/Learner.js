import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Learner = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Learner</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Learner;

const styles = StyleSheet.create({});
