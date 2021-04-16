import axios from "axios";

class DocterService{
 
  registerDocter(doctor){
          return axios.post("http://localhost:8080/savedoctor",doctor);
  }

  updateDocter(id,doctor)
  {
             
             return axios.put("url"+id,doctor)
  }
  

}

export default new DocterService();