import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "grid",
		placeItems: "center",
	},
});

export default Loading;
