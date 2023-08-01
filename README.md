## Objective

Create a basic web application using React/Next.js and GraphQL that mimics a contacts list and contact card like the ones found in your phone.

## Expectations

- Users should be able to view/scroll their contact list
- Users should be able to add new contacts
- If a user clicks on a contact, they should be routed to the specific contact’s page(i.e. /contacts/1).
- Users should be able to view said contacts details and perform edits to the information
- Users should be able to remove contacts from their list

## Evaluation Criteria

- Good use of React / Next.js
- Good use of the `getStaticProps` and `getStaticPaths` functions in Next.js
- Proper implantation of CRUD functionality
- Code readability and organization

### Installation

- Clone the repo and run `npm install` to install dependencies
- Add a file called `aws-exports.js` to the src folder and add the details provided in the email
- Run `npm run dev` to start the application
- Navigate to `http://localhost:3000/` to view the application

## Backend

The backend is using AWS AppSync and DynamoDB and has already been setup. The API provides 2 queries and 3 mutation. You can find the schema in the `schema.graphql` file found in the **graphql** folder for reference.

### Apollo Client

We are using Apollo Client to connect to our API and the `apolloConfig.tsx` has already been setup for you and will be ready to use once you add the `aws-exports.js` file provided in the email to the src folder.

### Styling

SASS is already setup for you. You can find the styles in the **styles** folder and ready for your customization.

### Deliverables

- A link to a public repo with your code so it can be cloned and tested
- A link to a live demo of your application **See Below**
- A short write up on your thought process and any challenges you faced

### Deployment (Optional)

If you choose to deploy your application, it is important that you do not commit the `aws-exports.js` file to your repo as it contains sensitive information. Instead, you should add the details as environment variables to your hosting service. You will also need to update the `apolloConfig.tsx` file to use the environment variables instead of the `aws-exports.js` file.

### Documentation

- [Next.js](https://nextjs.org/docs/getting-started)
- [Dynamic Routing](https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Apollo Queries](https://www.apollographql.com/docs/react/data/queries)
- [Apollo Mutations](https://www.apollographql.com/docs/react/data/mutations/)
