import React from "react";

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class PatientProfile extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          
          profiles :null,
        }
            
      this.viewprofile=this.viewprofile.bind(this);         
    }

    componentDidMount=()=>{
      this.viewprofile();
    }
              
                      viewprofile=()=>
                      {
                        
                          const  p_id=sessionStorage.getItem("pid")
                          fetch("http://localhost:8080/patientProfile/?p_id="+p_id,
                          {
                              method : 'POST',
                              headers : {
                              'Content-Type':'application/json'
                              },
                              body:(p_id)
                              
                          })
                          .then(resp => resp.json())
                          .then(data => this.setState({profiles: data}));
                          console.log("data",this.state.data);
                          console.log("profile",this.state.profiles);
                      }
        
    render() {
        return (
                <div>
                
                {/* {
                this.state.message?this.state.message:null} */}

                <div >
                <h2 className="text-center"> Welcome  </h2>
                <div className="row">
                <table className = "table table-striped table-bordered shadow ">
                    <thead></thead>
                        <tbody>
                                
                       {this.state.profiles?(
                           
                        <tr>
                                 
                                   <tr><td>Full Name : {this.state.profiles.full_name}</td></tr>
                                   <tr><td>Email :      {this.state.profiles.email}</td></tr>
                                   <tr><td>Contact No :{this.state.profiles.cnt_no}</td></tr>
                                   <tr><td>Address :   {this.state.profiles.address }</td></tr>
                                   <tr><td>City :      {this.state.profiles.city}</td></tr>
                                   <tr><td>Gender :    {this.state.profiles.gender}</td></tr>
                                   <tr><td>Dob :       {this.state.profiles.dob}</td></tr>
                                  
                                
                         </tr>
                       ):null}
                     
                            
                                       
                            </tbody>
                            </table>
                            
                    </div>
                    </div>
                </div>
             
                
            );




                            }


     
         }
                  export default PatientProfile;