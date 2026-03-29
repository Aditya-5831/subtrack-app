import React from "react";
import { Text, View } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SubscriptionDetails = () => {
  return (
    <View>
      <Text>SubscriptionDetails</Text>
    </View>
  );
};

export default SubscriptionDetails;
