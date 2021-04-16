import React from "react";


export class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            msg:"",
            loginerror:""
        }
    }

    checkUser=() =>{
        let  user_name=this.refs.user_name.value
        let user_pwd=this.refs.user_pwd.value;

        const url="http://localhost:8080/checkUser?user_name="+user_name+"&user_pwd="+user_pwd;
        fetch(url)
        .then(response => response.json()) 
        .then(data =>{
            if(data.user_type == "doctor")
            {

            this.props.history.push("/doctorhome/"+data.user_id);
            }
            else if (data.user_type == "patient")
            {
                //sessionStorage.setItem("pid",data.user_id);
            this.props.history.push("/patienthome/"+data.user_id);
            }
            
            
            
            else if (data.user_type == "admin")
            {
                
            this.props.history.push("/adminhome/"+user_name);
            }
            else if(data==undefined)
            {
            this.setState({loginerror:"Wrong ID/PWD"});
            }
        });
    }
    render(){
        return (
            <div className="mx-auto" className="position-absolute top-50 start-50 translate-middle
            p-3 mb-2 bg-danger text-white text-center
            "
            style={{width:1000,height:450}}>
               
                 <marquee> <h1> Welcome To Hospital Appointment System</h1></marquee>
                
                <br/>
               
                <form >
                    Enter User Name:    <input type="text" ref="user_name" /><br/>
                    <br/>
                    Enter Password:   <input type="password" ref="user_pwd" /><br/>
                    <br/>
                    <input type="button"  onClick={this.checkUser} value="Login" />
                    <br/>
                    <p>{this.state.loginerror}</p>
                    <a className="link-warning" href="/register">New user???Register here</a>
                </form>
            </div>
        );
    }
}
export default Login;