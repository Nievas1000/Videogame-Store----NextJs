import { useState } from "react";

const useMessage = () =>{
    const [message, setMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    const showMessage = (message) => {
        setMessage(message);
        setShowNotification(true);
        setTimeout(() => {
        setShowNotification(false);
        }, 2800);
    };

    const showErrors = (message) =>{
        switch (message){
            case "Firebase: Error (auth/wrong-password).":{
                showMessage("Incorrect password")
                break;
            }
            case "Firebase: Error (auth/user-not-found).":{
                showMessage("There is no user with that email")
                break;
            }
            case "Firebase: Error (auth/invalid-email).":{
                showMessage("The value of the email is not valid")
                break;
            }
            case "Firebase: Error (auth/email-already-in-use).":{
                showMessage("The email entered is already registered")
                break;
            }
            case "Firebase: Error (auth/invalid-password).":{
                showMessage("The password must be at least 6 characters")
                break;
            }
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":{
                showMessage("The password must be at least 6 characters")
                break;
            }
        }
    }

    return [message, showNotification, showErrors]
}

export default useMessage