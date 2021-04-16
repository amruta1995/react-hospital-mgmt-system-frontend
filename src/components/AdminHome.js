import React from "react";
import img1 from '../images/admin.png';
class AdminHome extends React.Component{
    constructor(props){

        super(props);
    }
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
                              <a id="navbar-brand" style={{color:'purple'}} class="navbar-brand" href="/staffpage">Admin</a>
                             <ul class="nav-sidebar bg-light">
                           
                               <div class="row">
                               <li class="nav-item ">
                                 <a class="nav-link active"  id="nav-link" aria-current="page" href="/">Go to Homepage</a>
                               </li>
                               </div>
                               <li class="nav-item ">
                                 <a  class="nav-link" id="nav-link" href="/addDoctor">Add Doctor</a>
                               </li> 
                               <li class="nav-item">
                                 <a class="nav-link" id="nav-link" href="/viewhistoryforadmin">Show All Appointments</a>
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
export default AdminHome;