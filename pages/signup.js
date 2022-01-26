import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
import useCredentials from './hooks/useCredentials'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { useRouter } from 'next/router';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignUp = () =>{
    const [credentials, changeUser] = useCredentials()

    const {push} = useRouter()

    const registrerUser = () =>{
      try {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        push("/")
      } catch (error) {
        console.log(error)
      }
    }

    const RegistrerWithGoogle = async () =>{
      const provider = new GoogleAuthProvider();
      try {
        let result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        push("/")
      } catch (error) {
        console.log(error)
      }
    }

    return(
      <div>
        <div className="login">
          <div className="login-header">
            <LockIcon />
            <h1>Sing Up</h1>
          </div>
        <div className="login-form">
            <input name='email' type="text" placeholder="Email" onChange={changeUser}/><br/>
            <input name='password' type="password" placeholder="Password" onChange={changeUser}/><br/>
            <input type="checkbox" className='checkbox' label=""/><label className='label-email'>"I want to receive inspiration, marketing promotions and updates via email."</label><br/>
            <button value="Login" className="login-button" onClick={registrerUser}> Sing Up </button><br/>
            <button className="login-button" onClick={RegistrerWithGoogle}>Sing up with Google &nbsp; <GoogleIcon className='google-icon'/></button><br/>
            <Link href='/signin' className="sign-up">Already have an account? Sign In</Link><br/>
        </div>
        </div>
      </div>  
    )
  }
  
  export default SignUp