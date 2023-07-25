import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";

const Form = ({ onSubmit, children, button, gap }) => {
  const { handleSubmit, register, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} gap={gap} autoComplete="off">
      
        {React.Children.map(children, (child) => {
          const { name } = child.props;

          if (!name) return child;

          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: register,
              errors: formState.errors[name],
              key: name,
            },
          });
        })}
      

      <Button type="submit">{button}</Button>
    </form>
  );
};

export default Form;