import React from "react";
import Navbar from "./Navbar";
import "./Coursemanagement.css";
import Tooltip from '@mui/material/Tooltip';
function Coursemanagement() {
    return (
        <div>
            <Navbar />
            <div id="course-body">
            <div className="h1"><center><h1>Ebooks</h1></center>
                <div className='ebook-container'>
                    <Tooltip title="Book:Java,Author:Cat.S.Horstmann"  placeholder="top" arrow>
                    <a href="https://www.tutorialspoint.com/java/java_tutorial.pdf" target="_self">
                        <img src="/images/image4.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="E-book Springboot by stackoverflow" placeholder="top"  arrow>
                    <a href="https://riptutorial.com/Download/spring-boot.pdf" target="_self">
                        <img src="/images/image.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Python-4th edition by MarkLutz"  placeholder="top" arrow>
                    <a href="http://bilal-qudah.com/mm/Programming%20Python%20Fourth%20Edition.pdf" target="_self">
                        <img src="/images/image1.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="AWS cloud by Amazon"  placeholder="top" arrow>
                    <a href="https://docs.aws.amazon.com/pdfs/whitepapers/latest/overview-aws-cloud-adoption-framework/overview-aws-cloud-adoption-framework.pdf" target="_self">
                        <img src="/images/image6.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Learning Angular 4th edition" placeholder="top"  arrow>
                    <a href="https://riptutorial.com/Download/angular.pdf" target="_self">
                        <img src="/images/image2.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Spring MVC reference book"  placeholder="top" arrow>
                    <a href="https://docs.spring.io/spring-framework/docs/2.5.x/spring-reference.pdf" target="_self">
                        <img src="/images/image.jpg" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Spring MVC by Aaron Schrum" arrow>
                    <a href="http://www.prognoztech.com/resources/content/spring-mvc.pdf" target="_self">
                        <img src="/images/image11.pn" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Machine learning by Nils J.Nilsson" arrow>
                    <a href="https://ai.stanford.edu/~nilsson/MLBOOK.pdf" target="_self">
                        <img src="/images/image 9.jpg" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Oracle Database by Oracle" arrow>
                    <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/jjdbc/jdbc-developers-guide.pdf" target="_self">
                        <img src="/images/image 16.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Networking by Doug Lowe" arrow>
                    <a href="https://edu.anarcho-copy.org/TCP%20IP%20-%20Network/Networking%20For%20Dummies.pdf" target="_self">
                        <img src="/images/image10.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Introduction to Cybersecurity by Jeetendra pande" arrow>
                    <a href="https://uou.ac.in/sites/default/files/slm/Introduction-cyber-security.pdf" target="_self">
                        <img src="/images/image 12.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="JavaScript by Danny Goodmann" arrow>
                    <a href="https://everythingcomputerscience.com/books/all.pdf" target="_self">
                        <img src="/images/image9.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Machine Learning by Alex Smola and S.V.N. Vishwanathan" arrow>
                    <a href="https://alex.smola.org/drafts/thebook.pdf" target="_self">
                        <img src="/images/image11.png" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="Debug It by Paul Butcher" arrow>
                    <a href="https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Pragmatic%20Programmers/Debug%20It%21.pdf" target="_self">
                        <img src="/images/image 14.jpg" height="250" width="200" />
                    </a></Tooltip>
                    <Tooltip title="EthicalHacking" arrow>
                    <a href="https://repo.zenk-security.com/Magazine%20E-book/EN-Ethical%20Hacking.pdf" target="_self">
                        <img src="/images/image12.png" height="250" width="200" />
                    </a></Tooltip>
                </div>
                <div className="pdf_links">
                    <table className="pdf_table" align="center">
                        <thead>
                            <tr>
                                <th>Course Material</th>
                                <th>Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GIT COMMANDS</td>
                                <td>
                                    <a href="https://upload-pdff.s3.ap-south-1.amazonaws.com/GIT+COMMANDS.pdf" className="pdf_link">
                                        CLICK HERE
                                    </a>
 
 
                                </td>
                            </tr>
                            <tr>
 
                                <td>LMS Capstone</td>
                                <td>
                                    <a href="https://upload-pdff.s3.ap-south-1.amazonaws.com/LMS_Capstone.pdf" className="pdf_link">CLICK HERE</a>
                                </td>
                               
 
                            </tr>
                            <tr>
                                <td>HTML Course</td>
                                   <td> <a href="https://upload-pdff.s3.ap-south-1.amazonaws.com/HTML+Course+Contents.pdf" className="pdf_link">CLICK HERE</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
}


export default Coursemanagement
