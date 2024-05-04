
import Transaction from "../Models/transaction";
import apiInstance from "../../../connectivity/api";

export async function fetchTransactions(): Promise<Transaction[]> {
  try {
    const response = await apiInstance.get("ngjunya/demo/transactions");
    const transactionData = response.data;
    const transactions = transactionData.map((data: any) => new Transaction(data.uuid, data.amount, data.date, data.description, data.status, data.merchantID));
    return transactions;
  } catch (error) {
    throw error;
  }
}
