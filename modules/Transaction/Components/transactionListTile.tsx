import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Transaction from "../Models/transaction";
import { useNavigation } from "@react-navigation/native";

interface TransactionListItemProps {
  transaction: Transaction;
}

const TransactionListItem: React.FC<TransactionListItemProps> = ({ transaction }) => {
  const navigation = useNavigation<any>();
  const handlePress = (selectedTransaction: Transaction) => {
    console.log(selectedTransaction);
    navigation.navigate("TransactionDetailsScreen", { transaction: selectedTransaction });
  };
  return (
    <TouchableOpacity onPress={() => handlePress(transaction)}>
      <View style={styles.container}>
        <Text style={styles.text}>{`UUID: ${transaction.uuid}`}</Text>
        <Text style={styles.text}>{`Amount: ${transaction.amount}`}</Text>
        <Text style={styles.text}>{`Date: ${transaction.date}`}</Text>
        <Text style={styles.text}>{`Status: ${transaction.status}`}</Text>
      </View>
    </TouchableOpacity>
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

export default TransactionListItem;
