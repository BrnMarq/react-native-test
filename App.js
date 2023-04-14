import "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";

import client from "@src/services/client";
// import Navigation from "@src/navigation/Navigation";

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer></NavigationContainer>
		</ApolloProvider>
	);
}
