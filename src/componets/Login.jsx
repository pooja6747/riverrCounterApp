import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
const navigate = useNavigate();
    const emailHandler = (e) => {
        let item = e.target.value;
        if (validator.isEmail(item)) {
            setErrorEmail('')
        } else {
            setErrorEmail('Invalid Email')
        }

        setEmail(e.target.value);
        console.log(setEmail);
    }


    ////For password
    const passwordHandler = (e) => {
        let pass = e.target.value;
        if (validator.isStrongPassword(pass, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
        setPassword(e.target.value);
        console.log(setPassword);
    }

    ////submit form
    const submitForm = (e) => {

        e.preventDefault();
        console.log(email + '  ' + password);
        navigate('/counter')
    }
    return (
        <>
        <div className="container">
            <div className="row"> 
             <div className="col-md-3"></div>
            <div className="col-md-6">
            <form>
                <h1 className='text-center'>Login Form</h1>
                <div class="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={emailHandler} value={email} />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorEmail}</span>
                </div>


                <div class="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={passwordHandler} name="pswd" />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>
                </div>

                <button type="submit" className="btn btn-primary mt-4" onClick={submitForm}>Log in</button>
            </form>
            </div></div>
          
           
        </div>
           
        </>
    )
}

export default Login