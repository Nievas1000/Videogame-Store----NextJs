import BubbleAlert from './BubbleAlert'
import CartList from './CartList'
import {useGame} from "../context/CartContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () =>{
    const {carro, cantidad, carroVisible, mostrarCarro, removeFromCart} = useGame()

    return(
        <div className='container_carro'>
            <span className='bubble'>
                <BubbleAlert value={cantidad}/>
            </span>
            <button data-testid="cart" onClick={mostrarCarro} className='carro'>
                    <ShoppingCartIcon className='icon-shop'/>
            </button>
                {carroVisible ? <CartList cantidad={cantidad} carro={carro} removeFromCart={removeFromCart}/> : null}
        </div>
    )
}
export default Cart;