import { View, Text, StyleSheet } from "react-native";
import globalStyles from "@src/styles/globalStyles";

const AddressInfo = ({ street, suite, city, zipcode, geo }) => {
	return (
		<View style={globalStyles.card}>
			<Text style={globalStyles.h2}>Address Info</Text>
			<Text>Street: {street}</Text>
			<Text>Suite: {suite}</Text>
			<Text>City: {city}</Text>
			<Text>ZipCode: {zipcode}</Text>
			<View style={styles.geoSection}>
				<Text style={globalStyles.h2}>Geo location</Text>
				<Text>Latitude: {geo.lat}</Text>
				<Text>Longitude: {geo.lng}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	geoSection: {
		marginTop: 10,
	},
});

export default AddressInfo;
