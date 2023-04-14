import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const UserItem = ({ name, company }) => {
	return (
		<TouchableWithoutFeedback onPress={() => console.log("Pressed")}>
			<View style={styles.card}>
				<View>
					<Text style={styles.name}>{name}</Text>
					<Text>{company.name}</Text>
				</View>
				<View style={styles.detailButton}>
					<Icon name='chevron-right' />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
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
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	name: {
		fontSize: 18,
	},
	detailButton: {
		backgroundColor: "#ccc",
		borderRadius: "100%",
		width: 25,
		height: 25,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		marginRight: 5,
	},
});

export default UserItem;
