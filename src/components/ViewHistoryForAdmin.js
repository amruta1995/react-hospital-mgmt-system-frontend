import React from "react";
import {Button }from 'reactstrap';
class ViewHistoryForAdmin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            appointmentsforadmin: [],
         
        }
    }


    componentDidMount=()=>{
        
      this.GetAppointmentForAdmin();
      
        }

        GetAppointmentForAdmin=()=>
        {
           
            const  p_id=sessionStorage.getItem("pid")
        fetch("http://localhost:8080/appointment")
        .then(resp => resp.json())
        .then(data => this.setState({appointmentsforadmin: data}));
        
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
                               
                            
                            </tr>
                        </thead>  
                        <tbody>
                                
                       {this.state.appointmentsforadmin.map((adm,index) => (
                           <tr >
              
                           <td>{adm.app_id}</td>
                                   <td>{adm.p_id.full_name}</td>
                                   <td>{adm.doc_id.f_name}&nbsp;&nbsp;{adm.doc_id.l_name}</td>
                                   <td>{adm.app_date}</td>
                                   {/* <td>{adm.s_id}</td> */}
                            
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
export default ViewHistoryForAdmin;