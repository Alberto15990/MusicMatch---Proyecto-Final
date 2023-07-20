import Navbar from "../../components/Navbar/Navbar";
import { useForm } from 'react-hook-form'


const templates = {
    login: {
        email: {
            validation: {
                required: true,
            },
        },
        username: {
            validation: {
                required: true,
            }

        },
        password: {
            validation: {
                required: true,
                minLength: 4,
            }

        },
        errors: {
            required: 'This fields are mandatory',
            minLength: '4 length at least is required',
        }
    },
};

const Login = () => {

    const { register, formState, handleSubmit } = useForm()

    const handleForm = (data) => {
        console.info('>form data', data)
    }

    const {errors} = templates.login

    return (
        <>
            <Navbar />
            <p></p>
            <h1>Login panel</h1>

            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">e-mail</label><br />
                <input 
                id="email" 
                placeholder="enter your e-mail" 
                {...register("email", { required: true })}></input>
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>

                <label htmlFor="username">Username</label><br />
                <input 
                id="username" 
                placeholder="enter your username" 
                {...register("username", { required: true })}></input>
                <p>{formState.errors && errors[formState.errors?.username?.type]}</p>

                <label htmlFor="password">Password</label><br />
                <input 
                id="password" 
                type="password" 
                placeholder="***********" 
                {...register("password", { required: true, minLength: 4 })}></input>
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>

                <input type="submit" />

            </form>
        </>
    )
}

export default Login;