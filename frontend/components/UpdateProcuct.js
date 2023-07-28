import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import useForm from '../lib/useForm';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      description
      price
      id
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String!
    $description: String!
    $price: Int!
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      price
      description
      name
    }
  }
`;

const UpdateProcuct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const [
    updateProduct,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const { inputs, handleChange, clearForm } = useForm(data?.Product);

  if (loading) return <p>Loading...</p>;

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();

        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            price: inputs.price,
            description: inputs.description,
          },
        });
      }}
    >
      <DisplayError error={updateError || error} />

      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
};

UpdateProcuct.propTypes = {
  id: PropTypes.string,
};

export default UpdateProcuct;
