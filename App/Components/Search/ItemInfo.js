import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export default function ItemInfo() {
  const Stack = createStackNavigator();
  return (
    <Stack.Screen name="Iteminfo">
      <View style={{ backgroundColor: "red", width: 800, height: 800 }}>
        <Text>ItemInfo</Text>
      </View>
    </Stack.Screen>
  );
}
