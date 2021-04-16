import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';




class BookAppointment extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      specifications: [],
      doctors: [],
      did: 0,
      slots: [],
      pid:0,
      app_date:null,
      status:"active",
     
      
     }
     this.sp = this.sp.bind(this);
     this.app_date = this.app_date.bind(this);
     this.did = this.did.bind(this);
     this.sid = this.sid.bind(this);
     this.confirmAppointment=this.confirmAppointment.bind(this);
    
  }

componentDidMount=()=>{
fetch("http://localhost:8080/doctorSpecificationForDropDownList")
.then(resp => resp.json())
.then(data => this.setState({specifications: data}));
//alert(this.state.specifications.length));

}

sp=(e)=>{
   fetch("http://localhost:8080/getDoctorBySpcification?sp="+e.target.value)
   .then(response => response.json())
   .then(data => this.setState({doctors: data}) )
}

app_date=(e)=>{
   //alert("pid"+sessionStorage.getItem("pid"));
    this.state.app_date=e.target.value;
   //console.log("date is ",this.state.dt);
    //alert(this.state.did);
    fetch("http://localhost:8080/showAvailable?did="+this.state.did+"&date="+e.target.value)
    .then(resp => resp.json())
    .then(data => this.setState({slots: data}))
   
}

did=(e)=>{
  this.state.did = e.target.value;
}

sid=(e)=>{
  this.state.sid = e.target.value;
}


confirmAppointment=(event)=>{
  alert("your appointment booked sucessfully")
  // alert(this.state.did);
  // alert(sessionStorage.getItem("pid"));
  // alert(this.state.sid);
  event.preventDefault();
  const requestOptions = {
     method : 'POST',
     headers : {
       'Content-Type':'application/json'
     },
     body: JSON.stringify({
      status:this.state.status,
      app_date:this.state.app_date,
      p_id:sessionStorage.getItem("pid"),
      doc_id:this.state.did,
      s_id:this.state.sid,

     })
  };

  fetch("http://localhost:8080/confirmAppointment",requestOptions)
  .then(response => response.json())
  .then(data => {this.setState({aid: data.app_id})});
}


  render() {
    return(
         <div className="app flex-row align-items-center" >
               
                          <Container>
                  
                            <Row className="justify-content-center">
                  
                              <Col md="10" lg="50" xl="60">
                  
                                <Card className="mx-5">
               
                                  <CardBody className="p-4">
                
                                    <Form>
                  
                                      <div class="row" className="mb-2 pageheading" >
               
                                        
                 
                                          <h2>Book Your Appointment</h2>
                
                                      
           
                                      </div>
          <form onSubmit={this.confirmAppointment}>
            select specification :
            <InputGroup className="mb-3">
            <select name ="doctor" onChange={(e)=>{this.sp(e)}}>
               <option>Select One</option>
                {
                  this.state.specifications.map(sp =>{
                       return( <option value={sp}>{sp}</option>)

                  })
                }
              </select><br/>
              </InputGroup>
              
              <InputGroup className="mb-3">
              select doctor :
                <select name="doc_id" onChange={(e)=>this.did(e)}>
                  <option>Select One</option>
                  {
                     this.state.doctors.map(doctor => {
                        return(
                          <option value={doctor.doc_id}> {doctor.f_name}&nbsp;&nbsp;{doctor.l_name}</option>
                        )
                      })
                  }
                </select> <br/>
                </InputGroup>
                {/* <p>{this.state.did}</p> */}
                <InputGroup className="mb-3">
                Select date :
                <input type="date" name="dt" onChange={(e)=>this.app_date(e)}  /> <br/>

                </InputGroup>

                <InputGroup className="mb-3">
                Select slot :
                <select name="slotid" onChange={(e)=>this.sid(e)}>
                <option>Select One</option>
                  {
                    this.state.slots.map(slot => {
                      return(
                        <option value={slot.s_id}> {slot.s_from}&nbsp;&nbsp;{slot.s_to}</option>
                      )
                    })
                  }
                </select> <br/>
                </InputGroup>

                <Button  onClick={(event) => this.confirmAppointment(event)}  color="success" >book Appointment</Button>
                <br/>
                <br/>
                <Button  onClick={event => window.location.href='/patienthistory'}  color="success" >view Appointment</Button>
            </form>

            <p>
               {
                 
                   <div>
                   <span text-blue> Your appointment is confirmed with Appointment id : {this.state.aid} </span>
                 
                   </div>
               
                } 
             </p>
            
            </Form>
           
               </CardBody>

             </Card>

           </Col>

         </Row>

       </Container>
        </div>
    );


  }


}export default BookAppointment;