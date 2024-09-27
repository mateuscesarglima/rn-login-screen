import { Stack } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="signin/index"
        options={{
          title: "SignIn",
        }}
      />
      <Stack.Screen
        name="signup/index"
        options={{
          title: "SignUp",
        }}
      />
    </Stack>
  );
}
