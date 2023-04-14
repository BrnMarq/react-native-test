import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

import globalStyles from "@src/styles/globalStyles";

const UserItem = ({ id, name, company }) => {
	const navigation = useNavigation();

	const goToUserDetail = () => {
		navigation.navigate("UserDetail", { id });
	};

	return (
		<TouchableWithoutFeedback onPress={goToUserDetail}>
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
		...globalStyles.card,
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
