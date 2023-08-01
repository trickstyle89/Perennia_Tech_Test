import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { gql, DocumentNode } from '@apollo/client';
import Link from 'next/link';

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

const DELETE_CONTACT: DocumentNode = gql`
  mutation DeleteContact($id: ID!) {
    deleteContact(id: $id) {
      id
    }
  }
`;

interface ContactCardProps {
  id: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_CONTACT_BY_ID, {
    variables: { id },
  });

  const [deleteContact] = useMutation(DELETE_CONTACT);

  const handleDelete = async () => {
    try {
      await deleteContact({
        variables: { id },
        // Optionally, you can update the cache to remove the deleted contact from the list
        update: (cache) => {
          cache.modify({
            fields: {
              getAllContacts(existingContacts, { readField }) {
                return existingContacts.contacts.filter(
                  (contactRef) => id !== readField('id', contactRef)
                );
              },
            },
          });
        },
      });

      // Handle successful deletion
      console.log('User deleted');
    } catch (error) {
      // Handle errors if any
      console.error('Error deleting user:', error.message);
    }
  };

  if (loading) return <p>Loading contact...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const contact = data.getContactById;

  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <Link href={`/edit-user?id=${contact.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactCard;
