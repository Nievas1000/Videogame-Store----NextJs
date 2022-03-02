import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
import useCredentials from '../hooks/useCredentials'
import useMessage from '../hooks/useMessage';
import {auth} from '../firebase'
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import Validation from "../components/Validation"
import GoogleIcon from '@mui/icons-material/Google';
import { useAuthUser } from '../hooks/useAuthUser';

const SignIn = () =>{
  useAuthUser()
  const [credentials, changeUser] = useCredentials()
  const [message, showNotification, showErrors] = useMessage()

  const loginUser = async () =>{
    try {
      setPersistence(auth, browserSessionPersistence)
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      window.history.back()
    } catch ({message}) {
      showErrors(message)
    }
  }

  const RegistrerWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    try {
      setPersistence(auth, browserSessionPersistence)
      let result = await signInWithPopup(auth, provider);
      GoogleAuthProvider.credentialFromResult(result)
      window.history.back()
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <div>
      <Validation show={showNotification} message={message} />
      <div className="login">
        <div className="login-header">
          <LockIcon />
          <h1>Sing In</h1>
        </div>
      <div className="login-form">
          <input name='email' className='input-datos' type="text" placeholder="Email" onChange={changeUser} /><br/>
          <input name='password' className='input-datos' type="password" placeholder="Password" onChange={changeUser} required/><br/>
          <button value="Login" className="login-button" onClick={loginUser}> Sing in </button><br/>
          <button className="login-button" onClick={RegistrerWithGoogle}>Sing in with Google &nbsp; <GoogleIcon className='google-icon'/></button><br/>
          <Link href='/signup' className="sign-up">Dont have an account? Sign Up</Link><br/>
      </div>
      </div>
    </div>  
  )
}

export default SignIn