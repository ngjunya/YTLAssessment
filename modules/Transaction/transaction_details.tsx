import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/routeprop";


interface TransactionDetailsScreenProps {
  route: RouteProp<RootStackParamList, "TransactionDetailsScreen">;
}

const TransactionDetailsScreen: React.FC<TransactionDetailsScreenProps> = ({ route }) => {
  const transaction = route.params.transaction;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>{`UUID: ${transaction.uuid}`}</Text>
        <Text style={styles.text}>{`Amount: ${transaction.amount}`}</Text>
        <Text style={styles.text}>{`Date: ${transaction.date}`}</Text>
        <Text style={styles.text}>{`Description: ${transaction.description}`}</Text>
        <Text style={styles.text}>{`Status: ${transaction.status}`}</Text>
        <Text style={styles.text}>{`Merchant ID: ${transaction.merchantID}`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});


export default TransactionDetailsScreen;
