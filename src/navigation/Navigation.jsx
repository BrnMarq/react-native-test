import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Users from "@src/screens/Users";
import UserDetail from "@src/screens/UserDetail";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Users'
				component={Users}
				options={{
					title: "",
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name='UserDetail'
				component={UserDetail}
				options={{
					title: "",
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
};

export default Navigation;
