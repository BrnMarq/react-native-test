import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";

import client from "@src/services/client";
import Navigation from "@src/navigation/Navigation";

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		</ApolloProvider>
	);
}
