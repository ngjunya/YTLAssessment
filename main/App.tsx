/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import AuthenticationScreen from "../modules/Authentication/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "../modules/Transaction/transaction";
import TransactionDetailsScreen from "../modules/Transaction/transaction_details";
import { RootStackParamList } from "../routes/routeprop";

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthenticationScreen">
        <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        <Stack.Screen name="TransactionDetailsScreen" component={TransactionDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
