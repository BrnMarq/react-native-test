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
			name
			username
			email
			address {
				street
				suite
				city
				zipcode
				geo {
					lat
					lng
				}
			}
			phone
			website
			company {
				name
				catchPhrase
				bs
			}
		}
	}
`;

export { GET_USERS, GET_USER_BY_ID };
