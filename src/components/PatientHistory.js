import React from "react";
import {Button }from 'reactstrap';
class  PatientHistory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            appointments: [],
            delete :'',
        }
    }


    componentDidMount=()=>{
        
      this.GetAppointment();
      
        }

        GetAppointment=()=>
        {
           
            const  p_id=sessionStorage.getItem("pid")
        fetch("http://localhost:8080/getAllAppointmentsByPatientId/?p_id="+p_id)
        .then(resp => resp.json())
        .then(data => this.setState({appointments: data}));
        
        }
        

        DeleteAppointment=(app_id)=>
        {
            fetch("http://localhost:8080/deleteAppointment", 
            {
            method : 'POST',
            headers : {
              'Content-Type':'application/json'
            },
            body:(app_id)
            
        })    
            .then(data =>{this.GetAppointment()
             this.setState({delete: data,message:"appointment has been deleted..."})}
        )
     
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
                                <th>Doctor Name</th>
                                <th>Appintment Date</th>
                                <th>Appintment Time</th>
                                <th>Action</th>
                            
                            </tr>
                        </thead>  
                        <tbody>
                                
                       {this.state.appointments.map((apt,index) => (
                           <tr >
              
                           <td>{apt.app_id}</td>
                                   <td>{apt.p_id.full_name}</td>
                                   <td>{apt.doc_id.f_name}</td>
                                   <td>{apt.app_date}</td>
                                   <td>{apt.s_id.s_from }{apt.s_id.s_to}</td>
                                <td>   <Button  onClick={(event) => this.DeleteAppointment(apt.app_id)}  color="danger" >CANCEL</Button>   </td> 
                           </tr>
                       ))}
                     
                            
                                       
                            </tbody>
                            </table>
                            
                    </div>
                    </div>
                </div>
             
                
            );




                            }



}
export default PatientHistory;