import BubbleAlert from './BubbleAlert'
import CartList from './CartList'
import {useGame} from "../context/cart"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () =>{
    const {carro, cantidad, carroVisible, mostrarCarro} = useGame()

    return(
        <div className='container_carro'>
            <span className='bubble'>
                <BubbleAlert value={cantidad}/>
            </span>
            <button onClick={mostrarCarro} className='carro'>
                    <ShoppingCartIcon />
            </button>
                {carroVisible ? <CartList cantidad={cantidad} carro={carro}/> : null}
        </div>
    )
}
export default Cart;