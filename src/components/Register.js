import React from "react";

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class Register extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
            patient: {
            
         
                full_name:'',
                email:'',
                cnt_no:'',
                address: '',
                city: '',
                gender: '',
                dob:'',
               
                user_name:'',
                user_pwd:'',

             },
             regpatient : {}
                  }
                    this.full_name = this.full_name.bind(this);
                    this.email = this.email.bind(this);
                    this.cnt_no = this.cnt_no.bind(this);
                    this.address = this.address.bind(this);
                    this.city= this.city.bind(this);
                    this.gender = this.gender.bind(this);
                    this.dob = this.dob.bind(this);

                    this.user_name = this.user_name.bind(this);
                    this.user_pwd = this.user_pwd.bind(this);
                   
            
                  }
                  
                  full_name(event) {
             
                    this.setState({ full_name: event.target.value })
              
                  }
                  email(event) {
             
                    this.setState({ email: event.target.value })
              
                  }
                  cnt_no(event) {
             
                    this.setState({ cnt_no: event.target.value })
              
                  }
                
                  address(event) {
             
                    this.setState({ address: event.target.value })
              
                  }
          
             
                  city(event) {
           
                    this.setState({ city: event.target.value })
              
                  }
                  gender(event) {
             
                    this.setState({ gender: event.target.value })
            
                  }
                  dob(event) {
             
                    this.setState({ dob: event.target.value })
            
                  }

                user_name(event) {
             
                    this.setState({user_name: event.target.value })
            
                  }

                  user_pwd(event) {
             
                    this.setState({ user_pwd: event.target.value })
            
                  }
              
                register(event) {
                 
          
                    fetch('http://localhost:8080/savepatient', {
                   
                      method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
             
                        'Content-Type': 'application/json'
          
                      },
                     
                    
                    "body": JSON.stringify({
            
                        full_name:this.state.full_name,
                        email: this.state.email,
                        cnt_no: this.state.cnt_no,
                        address:this.state.address,
                        city:this.state.city,
                        gender:this.state.gender,
                        dob: this.state.dob,
                        user_name:this.state.user_name,
                        user_pwd:this.state.user_pwd,
                       
                        
                     })
            
                    })
                   
                    .then(response  => response.json())
                      
                    .then((result) => {
                          this.setState({regpatient: result});
                          alert("registration sucessfully completed!!!!!")
                          //sessionStorage.setItem("pid",regpatient.p_id);
                          this.props.history.push("/login");
           
                      
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
               
                                        
                 
                                          <h2>Registration Form</h2>
                
                                      
           
                                      </div>
                                      <lable>Full Name</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.full_name(event)} />
                                      <p id="errors">{this.state.nameValidatedMessage}</p>
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
                                      <lable>City</lable><br></br>
                                        <InputGroup className="mb-3">
                                        <Input type="text"  onChange={(event) =>this.city(event)} /><br/>
                                        </InputGroup>
                                       
                                        <InputGroup className="mb-3" onChange={(event) =>this.gender(event)}> 
                                      <input type="radio" value="Male" name="gender" /> Male
                                      <input type="radio" value="Female" name="gender" /> Female
                                      <input type="radio" value="Other" name="gender" /> Other<br/>
                                      </InputGroup>
                                    
                                     
                                      <lable>Birthdate</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="date"  onChange={(event) =>this.dob(event)} placeholder="Enter date of birth " />
                                     </InputGroup>
                                      
                                     
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
                  export default Register;