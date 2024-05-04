import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, RefreshControl } from "react-native";
import Transaction from "./Models/transaction";
import { fetchTransactions } from "./Services/transactions_repository";
import TransactionListItem from "./Components/transactionListTile";

const TransactionScreen: React.FC = () => {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);


  const getTransactions = async () => {
    setRefreshing(true);
    try {
      // Fetch transactions from the API
      const fetchedTransactions = await fetchTransactions();
      // Update state with the fetched transactions
      setTransactions(fetchedTransactions);
      setRefreshing(false);
      setLoading(false); // Set loading state to false
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false); // Set loading state to false in case of error
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <SafeAreaView>
      {loading ? <Text>Loading...</Text> :
        (<FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionListItem transaction={item} />}
          keyExtractor={(item) => item.uuid.toString()}
          ListHeaderComponent={<View style={styles.sectionContainer}>
            <Text>{"Transactions"}</Text>
          </View>
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getTransactions}
            />
          }
        />)
      }
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

export default TransactionScreen;
