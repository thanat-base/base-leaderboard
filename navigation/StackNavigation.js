import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Learner from "../src/web/screens/Learner";
import WebLandingScreen from "../src/web/screens/WebLandingScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WebLandingScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Learner" component={Learner} />
        <Stack.Screen name="WebLandingScreen" component={WebLandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
