import { gql } from "@apollo/client";

const GET_USERS = gql`
	query getUsers($options: PageQueryOptions) {
		users(options: $options) {
			data {
				id
				name
				company {
					name
				}
			}
		}
	}
`;

const GET_USER_BY_ID = gql`
	query getUserById($id: ID!) {
		user(id: $id) {
			id
			username
			email
			address {
				geo {
					lat
					lng
				}
			}
		}
	}
`;

export { GET_USERS, GET_USER_BY_ID };
