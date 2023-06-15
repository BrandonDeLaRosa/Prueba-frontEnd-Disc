import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)

    const submit = (data) => {
        console.log(data);
        axios.post("https://desarrollo.api.noktos.com/api/login", data)
            .then(res => {
                // alert("Welcome to your session")
                localStorage.setItem("token", res.data.token)
                navigate("/hotels")
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert("Wrong credentials")
                }
                console.log(error.response);
            })
    }

    const clearFields = (e) => {
        e.preventDefault();

        reset({
            email: '',
            password: '',
            sistema: '',
        })
    }

    const visiblePassword = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible)
    }

    return (
        <div className='formPageContainer'>
            <form className='formContainer' onSubmit={handleSubmit(submit)}>
            <h1>Please Log in!</h1>

            <label htmlFor="email">Email</label>
            <input className='logInp' type="email" id='email' name='email' placeholder='  Email' {...register("email")} />


            {/* <div className='passWord'> */}
            <label htmlFor="password">Password</label>
            <input className='logInp' type={isVisible ? "text" : "password"} id='password' name='password' placeholder='  Password' {...register("password")} />
            {/* </div> */}

            <label htmlFor="sistema">Sistema</label>
            <input className='logInpNum' type="number" id='sistema' name='sistema' placeholder='  id' {...register("sistema")} />

            <div className='inpuBtnsCont'>
                <button className='logBtnsCle' onClick={clearFields}>clear</button>
                <button className='logSubBtn' type='submit'>Submit</button>
                <button className='logBtnsVis' onClick={visiblePassword}>{isVisible ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}</button>
            </div>

        </form>
        </div>

    );
};

export default Login;

/*


className='logInp'
className='logInp'*/