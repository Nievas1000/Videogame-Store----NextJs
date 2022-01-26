import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
import useCredentials from './hooks/useCredentials'
import {auth} from '../firebase'
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth';

const SignIn = () =>{
  const [credentials, changeUser] = useCredentials()

  const loginUser = async () =>{
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      await setPersistence(auth, browserSessionPersistence)
      window.history.back()
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <div>
      <div className="login">
        <div className="login-header">
          <LockIcon />
          <h1>Sing In</h1>
        </div>
      <div className="login-form">
          <input name='email' className='input-datos' type="text" placeholder="Email" onChange={changeUser}/><br/>
          <input name='password' className='input-datos' type="password" placeholder="Password" onChange={changeUser} /><br/>
          <button value="Login" className="login-button" onClick={loginUser}> Sing in </button><br/>
          <Link href='/signup' className="sign-up">Don't have an account? Sign Up</Link><br/>
      </div>
      </div>
    </div>  
  )
}

export default SignIn