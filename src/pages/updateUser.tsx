import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import { gql, DocumentNode } from '@apollo/client';

const GET_CONTACT_BY_ID: DocumentNode = gql`
  query GetContactById($id: ID!) {
    getContactById(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const UPDATE_CONTACT: DocumentNode = gql`
  mutation UpdateContact(
    $id: ID!
    $input: ContactInput!
  ) {
    updateContact(id: $id, input: $input) {
      id
      name
      email
      phone
    }
  }
`;


const DELETE_CONTACT: DocumentNode = gql`
  mutation DeleteContact($id: ID!) {
    deleteContact(id: $id) {
      id
    }
  }
`;

const GET_ALL_CONTACTS: DocumentNode = gql`
  query getAllContacts {
    allContacts {
      id
      name
      email
      phone
    }
  }
`;

const UpdateContact: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(GET_CONTACT_BY_ID, {
        variables: { id },
    });

    const [updateContact] = useMutation(UPDATE_CONTACT);
    const [deleteContact] = useMutation(DELETE_CONTACT);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Get the updated data from the form fields
            const formData = new FormData(event.currentTarget);
            const updatedName = formData.get('name') as string;
            const updatedEmail = formData.get('email') as string;
            const updatedPhone = formData.get('phone') as string;

            await updateContact({
                variables: {
                  id,
                  input: {
                    name: updatedName,
                    email: updatedEmail,
                    phone: updatedPhone,
                  },
                },
              });

            console.log('Contact updated successfully');

            // After a successful update, navigate back to the index page
            router.push('/');
        } catch (error) {
            console.error('Error updating contact:', error.message);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteContact({
                variables: { id },
                refetchQueries: [{ query: GET_ALL_CONTACTS }],
            });
            console.log('Contact deleted successfully');

            // After a successful delete, navigate back to the index page
            router.push('/');
        } catch (error) {
            console.error('Error deleting contact:', error.message);
        }
    };

    if (loading) return <p>Loading contact...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const contact = data.getContactById;

    return (
        <div>
            <h2>Update Contact</h2>
            <form onSubmit={handleSubmit}>
                {/* Form input fields for updating contact */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={contact.name} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" defaultValue={contact.email} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" defaultValue={contact.phone} />
                </div>
                <button type="submit">Update Contact</button>
            </form>

            {/* Delete button */}
            <button onClick={handleDelete}>Delete Contact</button>
        </div>
    );
};

export default UpdateContact;
