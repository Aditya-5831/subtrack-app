import { Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <Redirect href={"/insights"} />
    </SafeAreaView>
  );
};

export default index;
