import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
	card: {
		marginTop: 10,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowRadius: 3,
		shadowOpacity: 0.1,
		borderRadius: 5,
		padding: 10,
		marginHorizontal: 3,
	},
	h1: {
		fontSize: 18,
		fontWeight: "bold",
	},
	h2: {
		fontSize: 16,
		fontWeight: "bold",
	},
	h3: {
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default globalStyles;
