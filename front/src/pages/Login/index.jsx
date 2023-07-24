import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, Link } from "wouter";
import Navbar from "../../components/Navbar/Navbar";
import { useLogin, useUser } from "../../hooks";
import { login } from "../../misc/templates";
import Footer from "../../components/Footer";



const Login = () => {
  const { register, formState, handleSubmit } = useForm();

  const { login: loginMutation } = useLogin();
  const [, setLocation] = useLocation();
  const { data } = useUser();

  useEffect(() => {
    data && setLocation("/start");
  }, [data]);

  const { errors, email, username, password } = login;

  return (
    <>
      <Navbar />
      <p></p>
      <h1>Login panel</h1>

      <form onSubmit={handleSubmit(loginMutation)}>
        <label htmlFor="email">e-mail</label>
        <br />
        <input
          {...{ ...email.props, ...register("email", email.validation) }}
        />
        <p>{errors[formState.errors?.email?.type]}</p>

        <label htmlFor="username">Username</label>
        <br />
        <input
          {...{
            ...username.props,
            ...register("username", username.validation),
          }}
        />

        <p>{errors[formState.errors?.username?.type]}</p>

        <label htmlFor="password">Password</label>
        <br />
        <input
          {...{
            ...password.props,
            ...register("password", password.validation),
          }}
        />
        <p>{errors[formState.errors?.password?.type]}</p>

        <input type="submit" />
      </form>

      <Footer>
        <Link to="/register">Don't have account yet? Create one!</Link>
      </Footer>
    </>
  );
};

export default Login;
