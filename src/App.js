

import './App.css';
import {Link,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DoctorHome from './components/DoctorHome';
import PatientHome from './components/PatientHome';
import AdminHome from './components/AdminHome';
import BookAppointment from './components/BookAppointment';
import AddDoctor from './components/AddDoctor';
import DoctorUpdate from './components/DoctorUpdate';
import PatientUpdate from './components/PatientUpdate';
import DoctorHistory from './components/DoctorHistory';
import PatientHistory from './components/PatientHistory';
import ViewHistoryForAdmin from './components/ViewHistoryForAdmin';
import PatientProfile from './components/PatientProfile';
import DoctorProfile from './components/DoctorProfile';


function App() {
  return (
    <div>
      <nav>
        <Link to ="/login"></Link><br/>
        
        
       
        </nav>
        <div>
        <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/doctorhome/:user_id" render={({ match }) => <DoctorHome match={match} />} />
          <Route path="/patienthome/:user_id" render={({ match }) => <PatientHome match={match} />} />
          <Route path="/adminhome/:user_id" render={({ match }) => <AdminHome match={match} />}/>
          <Route path="/bookappointment" component={BookAppointment} />
          <Route path="/addDoctor" component={AddDoctor} />
          <Route path="/doctorUpdate" component={DoctorUpdate} />
          <Route path="/patientUpdate" component={PatientUpdate} />
          <Route path="/doctorhistory" component={DoctorHistory} />
          <Route path="/patienthistory" component={PatientHistory} />
          <Route path="/viewhistoryforadmin" component={ViewHistoryForAdmin} />
          <Route path="/patientprofile" component={PatientProfile} />
          <Route path="/doctorprofile" component={DoctorProfile} />
        </div>
    </div>
  );
}

export default App;