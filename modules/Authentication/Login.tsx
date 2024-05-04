import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ReactNativeBiometrics from "react-native-biometrics";
import * as Keychain from "react-native-keychain";
import SizedBox from "../../components/sizedBox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

const AuthenticationScreen: React.FC = () => {
  const [authenticationStatus, setAuthenticationStatus] = useState<string>("");
  const [isBiometricSuccess, setBiometricStatus] = useState<boolean>(true);
  const rnBiometrics = new ReactNativeBiometrics();
  const navigation = useNavigation<any>();

  const authenticateWithBiometrics = async () => {
    try {
      const { available } = await rnBiometrics.isSensorAvailable();
      if (!available) {
        setBiometricStatus(false);
        setAuthenticationStatus("Biometric authentication not available on this device.");
        return;
      }
      rnBiometrics.createKeys()
        .then((key) => {
          const { publicKey } = key;
          Keychain.setGenericPassword("biometricKey", publicKey).then(() => {
            let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString();
            let payload = epochTimeSeconds + "some message";
            rnBiometrics.createSignature({
              promptMessage: "Sign in",
              payload: payload,
            })
              .then((result) => {
                const { success } = result;
                if (success) {
                  handleNavigateToHome();
                } else {
                  setBiometricStatus(false);
                }
              });
          });
        });
    } catch (error) {
      setBiometricStatus(false);
      setAuthenticationStatus("An error occurred during authentication.");
    }
  };

  const handleNavigateToHome = () => {
    console.log("pressed");
    navigation.replace("TransactionScreen");
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <View style={styles.sectionContainer}>
            <SizedBox width={0} height={100}>{ }</SizedBox>
            <Text>{authenticationStatus}</Text>
            <Button title="Authenticate with Biometrics" onPress={authenticateWithBiometrics} />
            <SizedBox width={0} height={50}>{ }</SizedBox>
            {(isBiometricSuccess) ? <SizedBox width={0} height={50}>{ }</SizedBox> : <Button title="Login" onPress={handleNavigateToHome} />}
            <SizedBox width={0} height={50}>{ }</SizedBox>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight:
      "700",
  },

});


export default AuthenticationScreen;
