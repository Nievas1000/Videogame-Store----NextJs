import Link from 'next/link'
import Image from 'next/image'

const NavBar = ({titulo}) =>{
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
                        <li className='nav-link'><Link href="/AllGames">All games</Link></li>
                    </ul>
                </nav>
            </div>
        </div>  
    )
}

export default NavBar