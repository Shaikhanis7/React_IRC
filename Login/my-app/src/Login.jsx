
import { useRef, useState } from 'react';
import {Toaster,toast} from 'react-hot-toast'
const Login = () => {
    const [visible, setVisible] = useState(false);
    const username = useRef(null);
    const email = useRef(null);
    const age = useRef(null);
    const password = useRef(null);
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        age: '',
        password: ''
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const ageRegex = /^\d+$/;

    const validateForm = () => {
        let isValid = true;

        if (!emailRegex.test(email.current.value)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter a valid email address' }));
            isValid = false;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }

        if (!emailRegex.test(username.current.value)) {
            setErrors(prevErrors => ({ ...prevErrors, username: 'Enter a valid username' }));
            isValid = false;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, username: '' }));
        }

        if (!ageRegex.test(age.current.value)) {
            setErrors(prevErrors => ({ ...prevErrors, age: 'Enter a valid age' }));
            isValid = false;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, age: '' }));
        }

        if (!passwordRegex.test(password.current.value)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Invalid Password' }));
            isValid = false;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }

        return isValid;
    };

    const Login = (e) => {
         e.preventDefault();
        toast.success('Login Successful!')

        if (!validateForm()) {
            return;
        }

        const data = {
            username: username.current.value,
            email: email.current.value,
            age: age.current.value,
            password: password.current.value
        };
        console.log(data);

        // Your login logic here

        // Clear input fields and focus on email field
        username.current.value = '';
        email.current.value = '';
        age.current.value = '';
        password.current.value = '';
        email.current.focus();
    };

    const toggle = () => {
        setVisible(!visible);
    };

    return (
        <>
        <div className='card-wrapper'>
            <div className="">
                <h2 className="auth-title">Login</h2>
                <form className="auth-container h-30v shadow" onSubmit={Login}>
                    <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={username} required />
                    {errors.username ? (
                        <div className='cancel-btn'>{errors.username}</div>
                    ) : (<></>)}
                    <input type="email" name="" id="email" placeholder="Email" className="auth-input" ref={email} required />
                    {errors.email ? (
                        <div className='cancel-btn'>{errors.email}</div>
                    ) : (<></>)}
                    <input type="text" name="" id="age" placeholder="Age" className="auth-input" ref={age} required />
                    {errors.age ? (
                        <div className='cancel-btn'>{errors.age}</div>
                    ) : (<></>)}
                    <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} required />
                    {errors.password ? (
                        <div className='cancel-btn'>{errors.password}</div>
                    ) : (<></>)}
                    <span className='btn-container'>
                        <input type="submit" value="Login" className="auth-btn w-50" />
                        <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                    </span>
                </form>
            </div>
        </div>
        <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      </>
        
    );
};

export default Login;
