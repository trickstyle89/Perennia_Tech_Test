import React, {useState} from "react";
import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';
// import { createContact } from '../graphql/mutations';

const CREATE_CONTACT_MUTATION = gql`
  mutation createContact($newContact: ContactInput) {
    createContact(newContact: $newContact) {
      id
      name
      email
      phone
    }
  }
`;

const AddUserPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
      });

      const [addContact, { loading, error }] = useMutation(CREATE_CONTACT_MUTATION);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const { data } = await addContact({
            variables: {
                newContact: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                }
            }
        });

      // Handle successful form submission
      console.log('New user added:', data.createContact);

       // Reset the form fields
       setFormData({
        name: '',
        email: '',
        phone: ''
      });
      } catch (error) {
        }
      };
     
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="add-user-page">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
