import Link from 'next/link'
import Image from 'next/image'
import Cart from './Cart'
import AuthContext from "../context/AuthContext"
import { useContext } from "react"
import { useAuthUser } from "../hooks/useAuthUser"
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const NavBar = ({titulo}) =>{
    useAuthUser()
    const {isLogged} = useContext(AuthContext)

    const cerrarSesion = async () =>{
        try {
          await signOut(auth)
        } catch (error) {
          console.log(error)
        }
    }
    
    return(
        <div>
            <div className="nav-container">
                <div className='logos'>
                    <Image src="/KG_icon.png" width={150} height={100} className='logo-img' layout='fixed'/>
                    <h1 data-testid="titulo" className='logo'><Link href="/">{titulo}</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li className='nav-link'><Link href="/">Home</Link></li>
                        <li className='nav-link'><Link href="/allgames">All games</Link></li>
                    </ul>
                </nav>
                {isLogged ? 
                <div className='container-sessionout'><button className='button-out' onClick={cerrarSesion}><LogoutIcon/> &nbsp;Session off</button> </div> 
                : <div className='container-sessionon'><button className="button-on"><LoginIcon /><Link href="/signin"> &nbsp; Sing In</Link></button> </div>}
            <Cart />
            </div>
        </div>  
    )
}

export default NavBar