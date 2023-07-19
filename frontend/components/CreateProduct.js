import useForm from '../lib/useForm';

const CreateProcuct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'jhon',
    price: 123,
    description: 'teste',
  });
  return (
    <form>
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
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>

      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
};

export default CreateProcuct;
