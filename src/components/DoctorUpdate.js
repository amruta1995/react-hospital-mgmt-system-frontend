import React from "react";

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


 class DoctorUpdate extends React.Component{
     
     constructor(props) {
        super(props);
        this.state = {
            doctors: {
            
         
                
                email:'',
                address:'',
                cnt_no:'',
                doc_spec: '',

                user_pwd:'',
               
             },
             regdoctor : {}
                  }
                   
                    this.email = this.email.bind(this);
                    this.address = this.address.bind(this);
                    this.cnt_no = this.cnt_no.bind(this);
                   
                    this.user_pwd = this.user_pwd.bind(this);
                   

                    
            
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
          
             
                  

                  user_pwd(event) {
             
                    this.setState({ user_pwd: event.target.value })
            

                  }


                  updateEmail=(event)=>

                  {
                   
                    const  doc_id=sessionStorage.getItem("doc_id")
                    

                    fetch("http://localhost:8080/updateDoctorEmail/?doc_id="+doc_id+"&email="+this.state.email,
                    {
                        method : 'POST',
                        headers : {
                                   'Content-Type':'application/json'
                      },
                      body:(doc_id)
                    })   

                    alert("your email has been changed sucessfully....")
                    // .then(response => response.json())
                    // .then(data => this.setState({patients: data}) )
                 }
              
                 updateCnt=(event)=>
                 {
                  const  doc_id=sessionStorage.getItem("doc_id")
                   fetch("http://localhost:8080/updateDoctorContactNo/?doc_id="+doc_id+"&cnt_no="+this.state.cnt_no,
                   {
                    method : 'POST',
                    headers : {
                               'Content-Type':'application/json'
                  },
                  body:(doc_id)
                }) 
                alert("your contact number has been changed sucessfully....")  
                }
             
                updateAdd=(event)=>
                {
                  const  doc_id=sessionStorage.getItem("doc_id")
                  fetch("http://localhost:8080/updateDoctorAddress/?doc_id="+doc_id+"&address="+this.state.address,
                  {
                    method : 'POST',
                    headers : {
                               'Content-Type':'application/json'
                  },
                  body:(doc_id)
                })
                alert("your Address has been changed sucessfully....")   
               }
            
              //  updatePassword=(event)=>
              //  {
              //    fetch("http://localhost:8080/updateDoctorPassword?sp="+event.target.value)
              //    .then(response => response.json())
              //    .then(data => this.setState({doctors: data}) )
              // }
           
              
                update(event) {
                     
          
                    fetch('http://localhost:8080/updatedoctor', {
                   
                      method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
             
                        'Content-Type': 'application/json'
          
                      },
                     
                     
                     
                      
                    "body": JSON.stringify({
            
                       
                        email: this.state.email,
                       
                        address:this.state.address,
                        cnt_no: this.state.cnt_no,
                        user_pwd: this.state.user_pwd,
                        
                       
                        
                     })
            
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
               
                                        
                 
                                          <h2>Updation Form</h2>
                
                                      
           
                                      </div>
                                     
                                      
                                      <lable>email</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="text"  onChange={(event) =>this.email(event)} />
                                      <Button  onClick={(event) => this.updateEmail(event)}  color="success" >Update</Button>
              
                                      </InputGroup>
               
                                      
                                      <lable>Contact number</lable><br></br>
                                      <InputGroup className="mb-3">
                                      <Input type="number"  onChange={(event) =>this.cnt_no(event)}  />
                                      <Button  onClick={(event) => this.updateCnt(event)}  color="success" >Update</Button>
              
                                      </InputGroup>
               
                                      
                                      <lable>Address</lable><br></br>
                                      <InputGroup className="mb-3">
             
                                        <Input type="text"  onChange={(event) =>this.address(event)} />
                                        <Button  onClick={(event) => this.updateAdd(event)}  color="success" >Update</Button>
              
               
                                      </InputGroup>

                                     

                                      

                                        
                                     

                                      {/* <lable>Password</lable><br></br>
                                      <InputGroup className="mb-3">
                                     <Input type="password"  onChange={(event) =>this.user_pwd(event)}  />
                                     <Button  onClick={(event) => this.updatePassword(event)}  color="success" >Update</Button>
              
                  
                                      </InputGroup> */}

                                     
                                      
              
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
                  export default DoctorUpdate;