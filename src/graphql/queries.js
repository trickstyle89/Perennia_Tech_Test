export const getAllContacts = /* GraphQL */ `
  query getAllContacts($limit: Int, $nextToken: String) {
    getAllContacts(limit: $limit, nextToken: $nextToken) {
      contacts {
        id
        name
        email
        phone
      }
      nextToken
    }
  }
`;

export const getContactById = /* GraphQL */ `
  query getContactById($id: ID!) {
    getContactById(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
