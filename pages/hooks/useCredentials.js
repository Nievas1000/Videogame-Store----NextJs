import { useState } from "react";

const useCredentials = () =>{
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
    
    const changeUser = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value,
        });
      };

      return [credentials, changeUser]
}

export default useCredentials
