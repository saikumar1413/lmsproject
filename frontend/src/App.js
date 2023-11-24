import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Home from './Component/Home';
import Welcome from './Component/Welcome';
import Register from './Component/Register';
import Coursemanagement from './Component/Coursemanagement';
import Survey from './Component/Survey';
import Webinar from './Component/Webinar';
import Exam from './Component/Exam';
import Adminwebinar from './Component/Adminwebinar';
import Admincourse from './Component/Admincourse';
import Adminsurvey from './Component/Adminsurvey';
import Adminexam from './Component/Adminexam';
import Account from './Component/Account';
import Adminteam from './Component/Adminteam';
import Reportgeneration from './Component/Reportgeneration';
import Reportview from './Component/Reportview';
import Adminsurveyedit from './Component/Adminsurveyedit';
import EditUser from './Component/EditUser';
import Edituserdetails from './Component/Edituserdetails';
import Ticketraise from './Component/Ticketraise';
import Issuesreceived from './Component/Issuesreceived';
import Issueedit from './Component/Issueedit';
import Chatbot from './Component/Chatbot';


function App() {
  return (
    <>
    <Chatbot />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='Register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/coursemanagement' element={<Coursemanagement />} />
        <Route path='/adminsurvey' element={<Adminsurvey />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/webinar' element={<Webinar />} />
        <Route path='/adminwebinar' element={<Adminwebinar />} />
        <Route path='/admincourse' element={<Admincourse />} />
        <Route path='/issuereceived' element={<Issuesreceived />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/adminteam' element={<Adminteam />} />
        <Route path='/report' element={<Reportgeneration />} />
        <Route path='/reportview/:id' element={<Reportview />} />
        <Route path='/adminview/:id' element={<Adminsurveyedit />} />
        <Route path='/editdetails' element={<EditUser />} />
        <Route path='/edituserdetails/:id' element={<Edituserdetails />} />
        <Route path='/ticketraised' element={<Ticketraise />} />
        <Route path='/issuedit/:id' element={<Issueedit />} />
      </Routes>
    </>
  );
}

export default App;