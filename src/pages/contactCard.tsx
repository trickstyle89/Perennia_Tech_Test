import React from "react";
import { useQuery } from '@apollo/client';
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

interface ContactCardProps {
  id: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_CONTACT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading contact...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const contact = data.getContactById;

  return (
    <Link href={`/updateUser?id=${contact.id}`}>
      <div className="contact-card">
        <h3>{contact.name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    </Link>
  );
};

export default ContactCard;