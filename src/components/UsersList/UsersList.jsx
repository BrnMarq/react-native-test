import { SafeAreaView, Text, FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "@src/services";

import Loading from "@src/components/Loading";
import UserItem from "@src/components/UserItem";

const UsersList = () => {
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) return <Loading />;
	if (error) return <Text>The request has failed, please reload</Text>;

	const users = data.users.data;

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Users List</Text>
			<FlatList
				data={users}
				renderItem={({ item }) => <UserItem {...item} />}
				keyExtractor={(item, index) => `${item}-${index}`}
				ItemSeparatorComponent={<View style={styles.spacer} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		marginVertical: 70,
		marginHorizontal: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	spacer: {
		height: 10,
	},
});

export default UsersList;
