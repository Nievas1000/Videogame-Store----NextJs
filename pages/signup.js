import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
import useCredentials from '../hooks/useCredentials'
import useMessage from '../hooks/useMessage';
import {auth} from '../firebase'
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, setPersistence, browserSessionPersistence} from "firebase/auth";
import Validation from "../components/Validation"
import {useAuthUser} from "../hooks/useAuthUser"

const SignUp = () =>{
    useAuthUser()
    const [credentials, changeUser] = useCredentials()
    const [message, showNotification, showErrors] = useMessage()

    const {push} = useRouter()

    const registrerUser = async () =>{
      try {
        setPersistence(auth, browserSessionPersistence)
        await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        push("/")
      } catch ({message}) {
        showErrors(message)
      }
    }

    return(
      <div>
        <Validation show={showNotification} message={message} />
        <div className="login">
          <div className="login-header">
            <LockIcon />
            <h1>Sing Up</h1>
          </div>
        <div className="login-form">
            <input name='email' type="text" placeholder="Email" onChange={changeUser}/><br/>
            <input name='password' type="password" placeholder="Password" onChange={changeUser}/><br/>
            <input type="checkbox" className='checkbox' label=""/><label className='label-email'>I want to receive inspiration, marketing promotions and updates via email.</label><br/>
            <button value="Login" className="login-button" onClick={registrerUser}> Sing Up </button><br/>
            <Link href='/signin' className="sign-up">Already have an account? Sign In</Link><br/>
        </div>
        </div>
      </div>  
    )
  }
  
  export default SignUp