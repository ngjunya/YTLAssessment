

// Define your transaction type
interface Transaction {
    uuid: number;
    amount: string;
    date: string;
    description: string,
    status: string,
    merchantID: string
    // other properties
}

// Define the parameter list for your root stack navigator
export type RootStackParamList = {
    AuthenticationScreen: undefined;
    TransactionScreen: undefined;
    TransactionDetailsScreen: { transaction: Transaction }; // Define the parameters for each screen
};
