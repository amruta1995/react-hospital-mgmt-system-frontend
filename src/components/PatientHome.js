import React from "react";
import img1 from '../images/admin.png';
class PatientHome extends React.Component{
    constructor(props){

        super(props);
        this.state={
            cpatient:{}
        }
    }
    componentDidMount =()=> {
        fetch("http://localhost:8080/getpatient?userid="+this.props.match.params.user_id)
        .then(response => response.json())
        .then(data => {this.setState({cpatient: data});sessionStorage.setItem("pid",data.p_id)});
;    }
    render()
   {
            return (
                 <div id="main_nav" className="row">
                       <div class="container-fluid">
                       <div class="col-sm-3 col-md-3 sidebar">
                       <button className="navbar-toggler" type="button" href="#navbarDropdown" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                             </button>
                             <img src={img1} alt="logo" id="user-icon"></img>
                             <a id="navbar-brand" style={{color:'purple'}} class="navbar-brand" href="/staffpage">patient</a>
                            <ul class="nav-sidebar bg-light">
                          
                              <div class="row">
                              <li class="nav-item ">
                                <a class="nav-link active"  id="nav-link" aria-current="page" href="/patienthistory">view Appointments</a>
                              </li>
                              </div>

                              <div class="row">
                              <li class="nav-item ">
                                <a class="nav-link active"  id="nav-link" aria-current="page" href="/patientprofile">View Profile</a>
                              </li>
                              </div>

                              <li class="nav-item ">
                                <a  class="nav-link" id="nav-link" href="/bookappointment">Book Appointment</a>
                              </li>

                              <li class="nav-item">
                                <a class="nav-link" id="nav-link" href="/patientupdate">Update Profile</a>
                              </li>

                              <li class="nav-item">
                                <a class="nav-link" id="nav-link" href="/login">Logout</a>
                              </li>
                            </ul>
                            </div>
                         </div>
                           </div>
                           
                          

                           
                         
            )
           

   }
}
export default PatientHome;