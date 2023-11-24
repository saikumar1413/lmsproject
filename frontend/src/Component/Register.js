import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
const Register = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
    });

    const { fullname, email, mobile, username, password } = user;

    const onInputChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await axios.post("http://localhost:8080/api/a1/user", user);
            navigate("/login");
        } else {
            console.log('Errors occurs');
        }
    };
    //validations code
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let formErrors = {};
        if (!user.fullname.trim()) {
            formErrors.fullname = '*Username is Required';
        }
        if (!user.email.trim()) {
            formErrors.email = '*Email is required';
        } else if (!/\S+@\S+/.test(user.email)) {
            formErrors.email = '*invalid email format(email should contain @';
        }
        if (!user.mobile.trim()) {
            formErrors.mobile = '*Mobileno is required';
        } else if (!/^[789]\d{9}$/.test(user.mobile)) {
            formErrors.mobile = '*Mobile should start with 7,8,9 and should consists 10 digits';
        }
        if (!user.password.trim()) {
            formErrors.password = '*Password is required';
        }
        else if (user.password.length < 8) {
            formErrors.password = '*Password should be atleast 8 characters';
        }
        if(!/\S+@\S+/.test(user.password)){
            formErrors.password = '*Password should contain special characters';
        }
        if (!user.username.trim()) {
            formErrors.username = '*Username is required';
        }
        setErrors(formErrors);
        console.log(setErrors(formErrors));
        return Object.keys(formErrors).length === 0;
    }
    return (
        <center>
            <section class="bg-white dark:bg-gray-900">
                <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Learning Management System</span>
                    </h1>
                    <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-16">
                        “Education is one thing no one can take away from you.” —
                    </p>
                </div>
                <div class="container px-6 py-12 mx-auto">
                    <div class="lg:flex lg:items-center lg:-mx-6">
                        <div class="mt-8 lg:w-1/2 lg:mx-6">
                            <div
                                class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                <h1 class="text-lg font-medium text-gray-700">User Register</h1>

                                <form onSubmit={(e) => onSubmit(e)} class="mt-6">
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">FullName</label>
                                        <input type="text" placeholder="Enter your Username" class="block w-full px-5 py-3 mt-2 text-gray-700 text left placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            name="fullname"
                                            value={fullname}
                                            onChange={(e) => onInputChange(e)} />
                                        {errors.fullname && <span className="error">{errors.fullname}</span>}
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">email</label>
                                        <input type="email" placeholder="Enter your email." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            name="email"
                                            value={email}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        {errors.email && <span className="error">{errors.email}</span>}
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mobile</label>
                                        <input type="text" placeholder="Enter your mobile number." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            name="mobile"
                                            value={mobile}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        {errors.mobile && <span className="error">{errors.mobile}</span>}
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">UserName</label>
                                        <input type="text" placeholder="Enter your username." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            name="username"
                                            value={username}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        {errors.username && <span className="error">{errors.username}</span>}
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <input type="password" placeholder="Enter your password." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            name="password"
                                            value={password}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        {errors.password && <span className="error">{errors.password}</span>}
                                    </div>
                                    <button type="submit" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" >
                                        Register
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div id="example1">
                            <img src="https://t3.ftcdn.net/jpg/04/45/30/00/360_F_445300032_8BOeLM2RyS8hFgjPgZ8OMPXUelRCySun.jpg" id="yourImage" class="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </center>
    )
}

export default Register;