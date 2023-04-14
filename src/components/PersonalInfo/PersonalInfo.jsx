import { View, Text } from "react-native";
import globalStyles from "@src/styles/globalStyles";

const PersonalInfo = ({ username, email, phone }) => {
	return (
		<View style={globalStyles.card}>
			<Text style={globalStyles.h2}>Personal Info</Text>
			<Text>Username: {username}</Text>
			<Text>Email: {email}</Text>
			<Text>Phone: {phone}</Text>
		</View>
	);
};

export default PersonalInfo;
