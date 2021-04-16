import React from "react";
import {Button }from 'reactstrap';
class  DoctorHistory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            viewappointments: [],
           
        }
    }
    componentDidMount=()=>{
        
        this.GetDoctorAppointment();
        
          }
  
          GetDoctorAppointment=()=>
          {
             
              const  doc_id=sessionStorage.getItem("doc_id")
              console.log(doc_id)
          fetch("http://localhost:8080/AllAppointmentforDoctor/?doc_id="+doc_id,
          {
            method : 'POST',
            headers : {
              'Content-Type':'application/json'
            },
            body:(doc_id)
            
        })
          .then(resp => resp.json())
          .then(data => this.setState({ viewappointments: data}));
          
          }

          render() {
            return (
    
                
        
                    <div>
                    
                    {
                    this.state.message?this.state.message:null}
    
                    <div >
                    <h2 className="text-center">Appointment History</h2>
                    <div className="row">
                        <table className = "table table-striped table-bordered shadow">
                            <thead>
                                <tr>
                                    <th>Appointment ID</th>
                                    
                                    <th>Patient Name</th>
                                   
                                    <th>Appintment Date</th>
                                    <th>Appintment Time</th>
                                 
                                
                                </tr>
                            </thead>  
                            <tbody>
                                    
                           {this.state.viewappointments.map((apt,index) => (
                               <tr >
                  
                               <td>{apt.app_id}</td>
                                       <td>{apt.p_id.full_name}</td>
                                      
                                       <td>{apt.app_date}</td>
                                       <td>{apt.s_id.s_from} {apt.s_id.s_to}</td>
                                  
                               </tr>
                           ))}
                         
                                
                                           
                                </tbody>
                                </table>
                                
                        </div>
                        </div>
                    </div>
                 
                    
                );
    
                           }
    
    
 }export default DoctorHistory
    
    
    















