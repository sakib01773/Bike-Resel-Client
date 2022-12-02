import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hocks/useTitles';
import useToken from '../../hocks/useToken';

const Login = () => {
    useTitle("Login")


    const { register, handleSubmit, formState: { errors } } = useForm();


    const {logIn, googleLogIn} = useContext(AuthContext)

    const [loginError, setLoginError] = useState('')
    const [logInUserEmail, setLogInUserEmail] = useState('')
    const [token] = useToken(logInUserEmail)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from, {replace: true})
    }


    const handleLogin = data =>{
        console.log(data)
        setLoginError('')
        
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            setLogInUserEmail(data.email)
           
        })
        .catch(err => {
            console.error(err.message)
            setLoginError(err.message)
        })
    }

//  new code start
    
    const [createdUserEmail, setCreatedUserEmail] = useState()
    
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogIn = () => {
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email)

            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email, allUsers = "Buyer") => {
        const user = { name, email, allUsers }
        fetch('https://bike-resel-server.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate(from, { replace: true })
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>

            <div className='border-2 p-7 rounded-xl shadow-lg w-96'>
                <h2 className='text-2xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                   

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>

                        <input type='email'
                            {...register("email", { required: 'Email is requred' })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p role='alert' className='text-red-500'>{errors.email.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>

                        <input type='password'
                            {...register("password", {
                                required: 'password is requred',
                                minLength: { value: 8, message: 'Password mustbe 8 char' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$%])(?=.*[0-9])/, message: 'Password must be Strong' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p role='alert' className='text-red-500'>{errors.password.message}</p>}

                    </div>
                    {
                        loginError && <p>{loginError}</p>
                    }
                    <input className='btn  w-full mt-5' value='Login' type="submit" />

                </form>

                <p className='text-center my-2'>New Accout <Link to='/signup' className='underline text-blue-600'>Create Accout</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogIn} className='btn btn-outline w-full'>Continue with google</button>
            </div>

        </div>
    );
};

export default Login;