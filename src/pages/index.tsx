import React from "react";

import { useQuery } from '@apollo/client';
import { gql, DocumentNode } from '@apollo/client';
import Link from 'next/link';
import ContactCard from "./contactCard";

const GET_ALL_CONTACTS: DocumentNode = gql `
   query {
    getAllContacts {
      contacts {
        id
        name
        email
        phone
      }
    }
  }
`;
const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONTACTS);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="contacts-container">
      <main className="home">
        {data.getAllContacts.contacts.map((contact) => (
          <ContactCard key={contact.id} id={contact.id} />
        ))}
      </main>

      <Link href="/addUser">Add User</Link>
    </div>
  );
};

export default Home;
