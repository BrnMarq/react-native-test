import { View, Text, StyleSheet } from "react-native";
import globalStyles from "@src/styles/globalStyles";

const CompanyInfo = ({ name, catchPhrase, bs }) => {
	return (
		<View style={globalStyles.card}>
			<Text style={globalStyles.h2}>Company Info</Text>
			<Text>Name: {name}</Text>
			<Text>Catch Phrase: {catchPhrase}</Text>
			<Text>Bs: {bs}</Text>
		</View>
	);
};

export default CompanyInfo;
