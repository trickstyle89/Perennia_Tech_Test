export const createContact = /* GraphQL */ `
  mutation createContact($newContact: ContactInput) {
    createContact(newContact: $newContact) {
      id
      name
      email
      phone
    }
  }
`;

export const updateContact = /* GraphQL */ `
  mutation updateContact($input: ContactInput) {
    updateContact(input: $input) {
      id
      name
      email
      phone
    }
  }
`;

export const deleteContact = /* GraphQL */ `
  mutation deleteContact($id: ID!) {
    deleteContact(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
