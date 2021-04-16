import React from "react";

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class AddDoctor extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
            doctor: {
            
         
                f_name:'',
                l_name:'',
                email:'',
                address:'',
                cnt_no:'',
                doc_spec: '',
                consultancy_fees: '',
                hos_id:'',
                
                user_name:'',
                user_pwd:'',
               
             },
             regdoctor : {}
                  }
                    this.f_name = this.f_name.bind(this);
                    this.l_name = this.l_name.bind(this);
                    this.email = this.email.bind(this);
                    this.address = this.address.bind(this);
                    this.cnt_no = this.cnt_no.bind(this);
                    this.doc_spec= this.doc_spec.bind(this);
                    this.consultancy_fees = this.consultancy_fees.bind(this);
                    this.hos_id= this.hos_id.bind(this);

                    this.user_name = this.user_name.bind(this);
                    this.user_pwd = this.user_pwd.bind(this);
                   

                    
            
                  }
                  
                  f_name(event) {
             
                    this.setState({ f_name: event.target.value })
              
                  }
                  l_name(event) {
             
                    this.setState({ l_name: event.target.value })
              
                  }
                  email(event) {
             
                    this.setState({ email: event.target.value })
              
                  }
                 
                
                  address(event) {
             
                    this.setState({ address: event.target.value })
              
                  }

                  cnt_no(event) {
             
                    this.setState({ cnt_no: event.target.value })
              
                  }
          
             
                  doc_spec(event) {
           
                    this.setState({ doc_spec: event.target.value })
              
                  }
                  consultancy_fees(event) {
             
                    this.setState({ consultancy_fees: event.target.value })
            
                  }
                  hos_id(event) {
             
                    this.setState({ hos_id: event.target.value })
            
                  }
                  user_name(event) {
             
                    this.setState({user_name: event.target.value })
            
                  }

                  user_pwd(event) {
             
                    this.setState({ user_pwd: event.target.value })
            
                  }
              
              
                register(event) {
                     
          
                    fetch('http://localhost:8080/savedoctor', {
                   
                      method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
             
                        'Content-Type': 'application/json'
          
                      },
                     
                      
                    "body": JSON.stringify({
            
                        f_name:this.state.f_name,
                        l_name:this.state.l_name,
                        email: this.state.email,
                       
                        address:this.state.address,
                        cnt_no: this.state.cnt_no,
                        doc_spec:this.state.doc_spec,
                        hos_id:this.state.hod_id,
                        consultancy_fees:this.state.consultancy_fees,
                        
                        user_name:this.state.user_name,
                        user_pwd:this.state.user_pwd,
                        
                     })
            
                    })
                   
                    .then(response  => response.json())
                      
                    .then((result) => {
                          this.setState({regpatient: result});
                          alert("registration sucessfully completed!!!!!")
                          //sessionStorage.setItem("pid",regpatient.p_id);
                          this.props.history.push("/");
           
                      
                      })
                    
              
                    }
                  render() {
              
               
                    return (
             
                        <div className="app flex-row align-items-center">
               
                          <Container>
                  
                            <Row className="justify-content-center">
                  
                              <Col md="9" lg="7" xl="6">
                  
                                <Card className="mx-4">
               
                                  <CardBody className="p-4">
                
                                    <Form>
                  
                                      <div class="row" className="mb-2 pageheading">
               
                                        
                 
                                          <h2>Doctor Registration Form</h2>
                
                                      
           
                                      </div>
                                      <lable>First Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.f_name(event)} />
                                       </InputGroup>

                                       <lable>Last Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.l_name(event)} />
                                       </InputGroup>
                                      
                                      <lable>email</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.email(event)} />
                                      </InputGroup>
               
                                      
                                      <lable>Contact number</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="number"  onChange={(event) =>this.cnt_no(event)}  />
                                      </InputGroup>
               
                                      
                                      <lable>Address</lable><br></br>
                                      <InputGroup className="mb-3">
             
                                        <Input type="text"  onChange={(event) =>this.address(event)} />
               
                                      </InputGroup>

                                     

                                      <lable>Doctor Specification</lable><br></br>
                                        <InputGroup className="mb-3">
                                        <Input type="text"  onChange={(event) =>this.doc_spec(event)} /><br/>
                                        </InputGroup>
                                       
                                     
                                      <lable>Consultancy fees</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="text"  onChange={(event) =>this.consultancy_fees(event)}  />
                  
                                      </InputGroup>
                                      {/* <lable>Hospital Id</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="text"  onChange={(event) =>this.hos_id(event)}  />
                  
                                      </InputGroup> */}

                                        
                                      <lable>User Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="text"  onChange={(event) =>this.user_name(event)}  />
                  
                                      </InputGroup>

                                      <lable>Password</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="password"  onChange={(event) =>this.user_pwd(event)}  />
                  
                                      </InputGroup>

                                     
                                      <Button  onClick={(event) => this.register(event)}  color="success" >Register</Button>
              
                                    </Form>
               
                                  </CardBody>
               
                                </Card>
               
                              </Col>
           
                            </Row>
          
                          </Container>
               
                        </div>
               
                      );
              
                    }
               
                  }
                  export default AddDoctor;