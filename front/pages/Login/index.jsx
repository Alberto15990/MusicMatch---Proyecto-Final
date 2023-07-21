import Navbar from "../../components/Navbar/Navbar";
import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import { useLogin } from "../../hooks";
import { useQuery } from 'react-query'
import { user } from '../../services'
import { useEffect } from "react";
import { useLocation } from "wouter";

const useUser = () =>{

    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: user.info
    })

    return { data , isLoading}
}

const Login = () => {

    const { register, formState, handleSubmit } = useForm()

    const doLogin = useLogin()
    const[,setLocation] = useLocation()
    const {data} = useUser()


    useEffect(()=>{
        data && setLocation('/start')
    }, [data])

    const { errors, email, username, password } = login

    return (
        <>
            <Navbar />
            <p></p>
            <h1>Login panel</h1>

            <form onSubmit={handleSubmit(doLogin)}>
                <label htmlFor="email">e-mail</label><br />
                <input {...{ ...email.props, ...register("email", email.validation) }}
                />
                <p>{errors[formState.errors?.email?.type]}</p>

                <label htmlFor="username">Username</label><br />
                <input
                    {...{ ...username.props, ...register("username", username.validation) }}
                />

                <p>{errors[formState.errors?.username?.type]}</p>

                <label htmlFor="password">Password</label><br />
                <input
                    {...{ ...password.props, ...register("password", password.validation) }}
                />
                <p>{errors[formState.errors?.password?.type]}</p>

                <input type="submit" />

            </form>
        </>
    )
}

export default Login;