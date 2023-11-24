import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
function Navbar() {
    return (
        <div id="nav-container">
        <nav class="flex px-4 border-b md:shadow-lg items-center relative">
            <img src="images/infinite.png" alt="infinite"  className="image"/>
            <div class="text-lg font-bold md:py-0 py-4 ml-4">
                INFINITE E-LEARNING
            </div>
            <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <NavLink to={"/home"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Home</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/coursemanagement"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>Course Management </span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/survey"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>Surveys</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/webinar"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>Webinars</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/exam"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>Exam</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/adminteam"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>Admin Team</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/ticketraised"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>Support</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-300">
                            <span>logout</span>
                        </a>
                    </li>
                </NavLink>
            </ul>
            <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
            </div>
        </nav>
        </div>
    );
}
 
export default Navbar;