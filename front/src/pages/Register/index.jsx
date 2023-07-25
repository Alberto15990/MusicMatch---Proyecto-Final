import Navbar from "../../components/Navbar/Navbar";
import { Link } from "wouter";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Input from "../../components/Input";



import { validations } from "../../constants";
import { useLogin } from "../../hooks/useLogin";
import { useLogged } from "../../hooks/useLogged";

const Register = () => {
  useLogged()
  const { register } = useLogin();
  const { required } = validations;

  return (
      <>
      
      <Navbar />

      <Form onSubmit={register} button="Create">
        <Input
          name="email"
          label={true}
          placeholder="email@domain.com"
          validation={{ required }}
        />
        <Input
          name="username"
          label={true}
          placeholder="username"
          validation={{ required }}
        />
        <Input
          name="password"
          type="password"
          label={true}
          placeholder="******"
          validation={validations}
        />
      </Form>

      <Footer>
        <Link to="/login">Already registered? Log in, then!</Link>
      </Footer>
      </>
  );
};

export default Register;




