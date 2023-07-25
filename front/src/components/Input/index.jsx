

const Input = ({ label, name, register, validation, errors, ...rest }) => {
  return (
    <>
        {!!label && <label htmlFor={name}>{name}</label>}
        <input {...{ id: name, ...register(name, validation), ...rest }} />
        <p>{errors?.message}</p>
    </>
  );
};

export default Input;


