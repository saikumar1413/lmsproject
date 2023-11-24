import React from "react";
import Navbaradmin from "./Navbaradmin";
function Adminwebinar() {
    return (
        <div>
            <Navbaradmin />
            <div class="px-12 mx-auto max-w-7xl">
                <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span></span><br /> <span class="block w-full py-22 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Learning Management System</span> <span></span>
                    </h1>
                    <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                        Transforming Minds, Shaping Futures
                    </p>

                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        <img src="Images\lms.jpg" alt="Description" style={{ maxWidth: '200%', height: 'auto', borderRadius: '10px' }} />
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>Learning Management</b></h2><p>A learning management system is a software application or web-based technology used to plan, implement and assess a specific learning process. It's used for e-learning practices and, in its most common form, consists of two elements: a server that performs the base functionality and a user interface (UI) that is operated by instructors, students and administrators</p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>

                        <center>
                            <h2><b>Webinars</b></h2>
                            <br></br>
                            <p><b>Webinars: Your Gateway to Expertise.</b></p>
                            <br></br><p>Webinars facilitate real-time collaboration among learners. Group discussions, collaborative projects, and team activities can be conducted during webinars, fostering a sense of community and teamwork.</p></center>
                    </div>
                    <div style={{ flex: 1, }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_retYFy9PuL6jYtRtNp_GxsAZoItszNAGdA&usqp=CAU" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpzoNIgML2fO6MH-Lf_9WqCmwjpUPjZ6vXw&usqp=CAU" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>Surveys</b></h2><p>Use surveys to identify the specific training needs of learners or employees. This information can guide the development of future courses and training programs to address identified gaps in knowledge or skills.

                        </p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>

                        <center>
                            <h2><b>Exams</b></h2>
                            <br></br>
                            <p>Exams provide a formal and structured way to assess learners' understanding of course material. They help gauge the level of knowledge and comprehension achieved by the learners.</p>
                        </center>
                    </div>
                    <div style={{ flex: 1, }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5zyWZ4rmqjq1B9WsEeT-mYQXwnfs_Kdipw&usqp=CAU" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
                </div><br></br>
            </div>
        </div>
    )
}

export default Adminwebinar