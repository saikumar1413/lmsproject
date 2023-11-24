import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Exam from "./Exam";

const Examlogin = () => {
    let navigate = useNavigate();

    const [examlogin, setExamlogin] = useState({
      username: "",
      fullname:"",
    });
  
    const { username, fullname} = examlogin;
  
    const onInputChange = (e) => {
        setExamlogin({ ...examlogin, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/a1/user", user);
      navigate("/login");
    };
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                    <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">LEARNING MANAGEMENT SYSTEM</span>
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
                            <h1 class="text-lg font-medium text-gray-700">User Login</h1>

                            <form class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">UserName</label>
                                    <input type="text" placeholder="Enter your Username" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={username}
                                        onChange={(event) => {
                                            setExamlogin(event.target.value);
                                        }}
                                    //onChange={(e) => onInputChange(e)}
                                    />
                                </div>

                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type="password" placeholder="Enter your password." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={fullname}
                                        onChange={(event) => {
                                            setExamlogin(event.target.value);
                                        }
                                        }
                                    //onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type="password" placeholder="Enter your password." class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={this.state.score}
                                        onChange={(event) => {
                                            setExamlogin(event.target.value);
                                        }
                                        }
                                    //onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <button type="submit" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={login}>
                                    Login
                                </button>
                                <Link className="btn btn-outline-danger mx-2" to="/">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Examlogin
