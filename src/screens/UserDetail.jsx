import { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import Icon from "react-native-vector-icons/FontAwesome5";

import { GET_USER_BY_ID } from "@src/services";
import globalStyles from "@src/styles/globalStyles";
import Loading from "@src/components/Loading";
import PersonalInfo from "@src/components/PersonalInfo";
import AddressInfo from "@src/components/AddressInfo";
import CompanyInfo from "@src/components/CompanyInfo/CompanyInfo";

const UserDetail = ({ navigation, route }) => {
	const id = route.params.id;

	const { loading, error, data } = useQuery(GET_USER_BY_ID, {
		variables: { id },
	});

	if (loading) return <Loading />;
	if (error) return <Text>The request has failed, please reload</Text>;

	const { user } = data;

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Icon
					name='chevron-left'
					size={20}
					color='#000'
					onPress={navigation.goBack}
				/>
			),
		});
	}, [navigation, id]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={globalStyles.h1}>{user.name}</Text>
			<PersonalInfo {...user} />
			<AddressInfo {...user.address} />
			<CompanyInfo {...user.company} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginHorizontal: 10,
	},
});

export default UserDetail;
